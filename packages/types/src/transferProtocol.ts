import { RequestSerializer } from "./marshaller";

export type TransferHandler<RequestType, ResponseType, HandlerOptions> = {
  destroy?: () => void;
  handle: (
    request: RequestType,
    handlerOptions: HandlerOptions
  ) => Promise<ResponseType>;
};

export interface TransferProtocol<RequestType, ResponseType, HandlerOptions> {
  resolvedConfig: {
    handler: TransferHandler<RequestType, ResponseType, HandlerOptions>;
  };
  request?: RequestType;
  response?: ResponseType;
  setRequest: (
    serializer: RequestSerializer<RequestType>,
    input: any
  ) => RequestType;
}
