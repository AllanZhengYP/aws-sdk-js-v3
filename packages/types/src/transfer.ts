import { RequestSerializer } from "./marshaller";
import { ResponseParser } from "./unmarshaller";

export type TransferHandlerOutput<ResponseType> = { response: ResponseType };

export interface TransferHandler<RequestType, ResponseType> {
  destroy?: () => void;
  handle: (
    request: RequestType,
    handlerOptions?: any
  ) => Promise<TransferHandlerOutput<ResponseType>>;
}

export abstract class Protocol<RequestType, ResponseType> {
  constructor(readonly handler: TransferHandler<RequestType, ResponseType>) {}
  abstract serialize(
    serializer: RequestSerializer<RequestType>,
    input: any
  ): RequestType;
  abstract parse<T extends ResponseParser<ResponseType>>(
    parser: T,
    input: ResponseType
  ): ReturnType<T>;
}
