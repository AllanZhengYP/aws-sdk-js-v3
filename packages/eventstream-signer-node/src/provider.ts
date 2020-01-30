import { Encoder, Decoder, EventStreamSignerProvider } from "@aws-sdk/types";
import { EventStreamRequestSigner } from "./EventStreamSigner";

export const eventStreamSignerProvider: EventStreamSignerProvider = (options: {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  signer: any; //Should be EventSigner; But this would unblock the client
}) =>
  new EventStreamRequestSigner({
    eventSigner: options.signer,
    utf8Decoder: options.utf8Decoder,
    utf8Encoder: options.utf8Encoder
  });
