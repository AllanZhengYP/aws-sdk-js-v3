import {
  HttpHandler,
  UrlParser,
  HttpRequest,
  HttpResponse,
  RequestSerializer,
  BodyLengthCalculator
} from "@aws-sdk/types";
export interface HTTPConfiguration {
  urlParser: UrlParser;
}

export type Handler<
  RequestType extends object,
  ResponseType extends object,
  HandlerOptions extends object
> = {
  destroy?: () => void;
  handle: (
    request: RequestType,
    handlerOptions: HandlerOptions
  ) => Promise<ResponseType>;
};

export interface ApplicationProtocol<
  RequestType extends object,
  ResponseType extends object,
  HandlerOptions extends object
> {
  resolvedConfig: {
    handler: Handler<RequestType, ResponseType, HandlerOptions>;
  };
  request?: RequestType;
  response?: ResponseType;
  setRequest: (serializer: RequestSerializer, input: any) => RequestType;
}

interface HTTPProtocolConfiguration {
  bodyLengthChecker?: BodyLengthCalculator;
  ttl?: number;
  handler: HttpHandler;
}

interface HTTPProtocolResolvedConfiguration extends HTTPProtocolConfiguration {
  bodyLengthChecker: BodyLengthCalculator;
  ttl: number;
}

export class HTTPProtocol<StreamType extends object>
  implements ApplicationProtocol<HttpRequest, HttpResponse, StreamType> {
  request?: HttpRequest;
  response?: HttpResponse;
  resolvedConfig: HTTPProtocolResolvedConfiguration;
  constructor(configs: HTTPProtocolConfiguration) {
    this.resolvedConfig = {
      ttl: configs.ttl || 1000,
      bodyLengthChecker: configs.bodyLengthChecker || (() => undefined),
      handler: configs.handler
    };
  }

  setRequest(serializer: RequestSerializer, input: any) {
    this.request = serializer.serialize(input, "http");
    /** Use existing serializer to demonstrate */
    return this.request;
  }
}

// export interface S3BaseConfiguration {}

// type S3ResolvedConfig = S3BaseConfiguration &
//   HTTPProtocol<{}>["resolvedConfig"] &
//   Authentication["resolvedConfig"];

// class S3Client extends AWSClient<HTTPProtocol, StreamType> {

//   public readonly config: S3ResolvedConfig = {}

//   public readonly middelwareStack = new MiddelwareStack<HTTPProtocol>()

// }

// class S3Client<P extends ApplicationProtocol> extends SmithyClient<P, StreamType> {

//   public readonly config: S3ResolvedConfig = {}

//   public readonly middelwareStack = new MiddelwareStack<HTTPProtocol>()

//   public static create(P protocol): S3Client<P>;
// }

// new SmithyClient({
//   serializer: S3Serialzier,
//   deserialzier:
//   auth

// })
