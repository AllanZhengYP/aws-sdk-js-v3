import {
  RequestSerializer,
  ResponseParser,
  ParserDecoratorStack
} from "@aws-sdk/types";
import { Protocol, TransferHandler } from "@aws-sdk/protocol";

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
    output: HttpResponse<StreamType>,
    decoratorStack?: ParserDecoratorStack<HttpResponse<StreamType>>
  ) {
    if (decoratorStack) {
      output = decoratorStack.resolve()(output);
    }
    return parser(output, "JsonRpc") as any;
  }
}
