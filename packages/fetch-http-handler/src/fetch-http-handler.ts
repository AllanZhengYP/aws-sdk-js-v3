import { HeaderBag, HttpHandlerOptions } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { requestTimeout } from "./request-timeout";
import { buildQueryString } from "@aws-sdk/querystring-builder";

declare var AbortController: any;

/**
 * Represents the http options that can be passed to a browser http client.
 */
export interface BrowserHttpOptions {
  /**
   * The number of milliseconds a request can take before being automatically
   * terminated.
   */
  requestTimeout?: number;
}

export class FetchHttpHandler implements HttpHandler {
  constructor(private readonly httpOptions: BrowserHttpOptions = {}) {}

  destroy(): void {
    // Do nothing. TLS and HTTP/2 connection pooling is handled by the
    // browser.
  }

  handle(
    request: HttpRequest,
    options: HttpHandlerOptions
  ): Promise<{ response: HttpResponse }> {
    const abortSignal = options?.abortSignal;
    const requestTimeoutInMs = this.httpOptions.requestTimeout;

    // if the request was already aborted, prevent doing extra work
    if (abortSignal?.aborted) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return Promise.reject(abortError);
    }

    let path = request.path;
    if (request.query) {
      const queryString = buildQueryString(request.query);
      if (queryString) {
        path += `?${queryString}`;
      }
    }

    const port = request.port;
    const url = `${request.protocol}//${request.hostname}${
      port ? `:${port}` : ""
    }${path}`;
    const requestOptions: RequestInit = {
      body: request.body,
      headers: new Headers(request.headers),
      method: request.method,
      mode: "cors"
    };

    // some browsers support abort signal
    if (typeof AbortController !== "undefined") {
      (requestOptions as any)["signal"] = abortSignal;
    }

    const fetchRequest = new Request(url, requestOptions);
    const raceOfPromises = [
      fetch(fetchRequest).then(response => {
        const fetchHeaders: any = response.headers;
        const transformedHeaders: HeaderBag = {};

        for (let pair of <Array<string[]>>fetchHeaders.entries()) {
          transformedHeaders[pair[0]] = pair[1];
        }

        // todo is this safe? what if different polyfills / libraries conflict
        //   with eachother, e.g. a polyfilled response.body in a browser with
        //   native window.ReadableStream.
        //   can we just check for existence of response.body, as that should be
        //   guaranteed to be a ReadableStream if it exists?
        const hasResponseStream =
          typeof ReadableStream === "function" &&
          response.body instanceof ReadableStream;

        // Return the response with buffered body
        if (!hasResponseStream) {
          return response.blob().then(body => ({
            response: new HttpResponse({
              headers: transformedHeaders,
              statusCode: response.status,
              body
            })
          }));
        }
        // Return the response with streaming body
        return {
          response: new HttpResponse({
            headers: transformedHeaders,
            statusCode: response.status,
            body: response.body
          })
        };
      }),
      requestTimeout(requestTimeoutInMs)
    ];
    if (abortSignal) {
      raceOfPromises.push(
        new Promise<never>((resolve, reject) => {
          abortSignal.onabort = () => {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };
        })
      );
    }
    return Promise.race(raceOfPromises);
  }
}
