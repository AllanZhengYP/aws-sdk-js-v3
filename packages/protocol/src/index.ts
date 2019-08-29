import {
  RequestSerializer,
  ParserDecoratorStack,
  ResponseParser
} from "@aws-sdk/types";

export type TransferHandler<RequestType, ResponseType> = {
  destroy?: () => void;
  handle: (request: RequestType, handlerOptions?: any) => Promise<ResponseType>;
};

export abstract class Protocol<RequestType, ResponseType> {
  constructor(readonly handler: TransferHandler<RequestType, ResponseType>) {}
  abstract serialize(
    serializer: RequestSerializer<RequestType>,
    input: any
  ): RequestType;
  abstract parse<T extends ResponseParser<ResponseType>>(
    parser: T,
    input: ResponseType,
    decoratorStack?: ParserDecoratorStack<ResponseType>
  ): ReturnType<T>;
}
