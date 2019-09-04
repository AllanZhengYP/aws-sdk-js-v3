import {
  RequestSerializer,
  ResponseParser,
  Protocol,
  TransferHandler
} from "@aws-sdk/types";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

export class JsonRpcProtocol<StreamType>
  implements Protocol<HttpRequest<StreamType>, HttpResponse<StreamType>> {
  constructor(
    readonly handler: TransferHandler<
      HttpRequest<StreamType>,
      HttpResponse<StreamType>
    >
  ) {}
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
