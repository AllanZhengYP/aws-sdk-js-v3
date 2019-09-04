import {
  HandlerExecutionContext,
  Provider,
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeMiddleware,
  SerializeHandlerOutput
} from "@aws-sdk/types";
import { Protocol } from "@aws-sdk/protocol";

export function serializerMiddleware<
  Input extends object,
  Output extends object
>(
  protocol: Protocol<any, any>,
  serializer: RequestSerializer<any>
): SerializeMiddleware<Input, Output> {
  return (
    next: SerializeHandler<Input, Output>
  ): SerializeHandler<Input, Output> => async (
    args: SerializeHandlerArguments<Input>
  ): Promise<SerializeHandlerOutput<Output>> => {
    const request = protocol.serialize(serializer, args.input);
    return next({
      ...args,
      request
    });
  };
}
