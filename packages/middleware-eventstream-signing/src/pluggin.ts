import { Pluggable } from "@aws-sdk/types";
import { EventStreamSigningResolvedConfig } from "./configuration";
import {
  eventStreamSigningMiddleware,
  eventStreamSigningMiddlewareOptions
} from "./signing-middleware";
import {
  eventStreamHeaderMiddleware,
  eventStreamHeaderMiddlewareOptions
} from "./headers-middleware";

export const getEventStreamSigningPlugin = (
  options: EventStreamSigningResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.addRelativeTo(
      eventStreamSigningMiddleware(options),
      eventStreamSigningMiddlewareOptions
    );
    clientStack.add(
      eventStreamHeaderMiddleware,
      eventStreamHeaderMiddlewareOptions
    );
  }
});
