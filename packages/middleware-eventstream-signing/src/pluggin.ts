import { Pluggable } from "@aws-sdk/types";
import { EventStreamResolvedConfig } from "./configuration";
import {
  eventStreamSigningMiddleware,
  eventStreamSigningMiddlewareOptions
} from "./signing-middleware";

export const getEventStreamPlugin = (
  options: EventStreamResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.addRelativeTo(
      eventStreamSigningMiddleware(options),
      eventStreamSigningMiddlewareOptions
    );
  }
});
