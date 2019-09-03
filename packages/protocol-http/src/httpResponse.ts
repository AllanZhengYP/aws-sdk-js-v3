import {
  HttpMessage,
  HttpEndpoint,
  QueryParameterBag,
  HeaderBag
} from "./http";

type HttpResponseOptions<StreamType> = Partial<HttpMessage<StreamType>> & {
  statusCode: number;
};

export class HttpResponse<StreamType> {
  public statusCode: number;
  public headers: HeaderBag;
  public body?: ArrayBuffer | ArrayBufferView | string | StreamType;
  constructor(options: HttpResponseOptions<StreamType>) {
    this.statusCode = options.statusCode;
    this.headers = options.headers || {};
    this.body = options.body;
  }
}
