import {
  HttpRequest,
  HttpResponse,
  RequestSerializer,
  ResponseParser
} from "@aws-sdk/types";
import { Protocol, TransferHandler } from "@aws-sdk/protocol";

export class RestJsonHttpProtocol<StreamType> extends Protocol<
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
    return serializer(input, "RestJson");
  }
  parse(
    parser: ResponseParser<HttpResponse<StreamType>>,
    output: HttpResponse<StreamType>
  ) {
    //process response through parser decorator stack
    return parser(output, "RestJson") as any;
  }
}
