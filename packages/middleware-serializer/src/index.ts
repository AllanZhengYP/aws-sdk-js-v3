import {
  HandlerExecutionContext,
  Provider,
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeMiddleware
} from "@aws-sdk/types";
import { Protocol } from "@aws-sdk/protocol";

export function serializerMiddleware<
  Input extends object,
  Output extends object,
  Stream
>(
  protocol: Protocol<any, any>,
  serializer: RequestSerializer<any>
): SerializeMiddleware<Input, Output, Stream> {
  return (
    next: SerializeHandler<Input, Output, Stream>
  ): SerializeHandler<Input, Output, Stream> => async (
    args: SerializeHandlerArguments<Input, Stream>
  ): Promise<Output> => {
    const request = protocol.serialize(serializer, args.input);

    if (request.body && ["GET", "HEAD"].indexOf(request.method) >= 0) {
      // remove body for GET/HEAD requests (fetch complains)
      delete request.body;
    }
    return next({
      ...args,
      request
    });
  };
}
