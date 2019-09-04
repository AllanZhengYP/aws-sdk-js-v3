import {
  RequestSerializer,
  ResponseParser,
  ParserDecoratorStack
} from "@aws-sdk/types";
import { Protocol, TransferHandler } from "@aws-sdk/protocol";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

export class JsonRpcProtocol<StreamType> extends Protocol<
  HttpRequest<StreamType>,
  HttpResponse<StreamType>
> {
  constructor(
    handler: TransferHandler<HttpRequest<StreamType>, HttpResponse<StreamType>>
  ) {
    super(handler);
  }
  serialize(
    serializer: RequestSerializer<HttpRequest<StreamType>>,
    input: any
  ) {
    return serializer(input, "JsonRpc");
  }
  parse(
    parser: ResponseParser<HttpResponse<StreamType>>,
    output: HttpResponse<StreamType>
  ) {
    return parser(output, "JsonRpc") as any;
  }
}
