import { EventStreamRequestSigner } from "@aws-sdk/types";

export interface EventStreamSigningInputConfig {}

export type EventStreamSigningResolvedConfig = {
  eventStreamSigner: EventStreamRequestSigner;
};

interface PreviouslyResolved {
  eventStreamSignerProvider: (options: any) => EventStreamRequestSigner;
}

export function resolveEventStreamSigningConfig<T>(
  input: T & PreviouslyResolved & EventStreamSigningInputConfig
): T & EventStreamSigningResolvedConfig {
  return {
    ...input,
    eventStreamSigner: input.eventStreamSignerProvider({ ...input })
  };
}
