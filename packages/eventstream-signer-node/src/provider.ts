import {
  Encoder,
  Decoder,
  EventSigner,
  EventStreamSignerProvider
} from "@aws-sdk/types";
import { EventStreamRequestSigner } from "./EventStreamSigner";

/** NodeJS event stream utils provider */
export const eventStreamSignerProvider: EventStreamSignerProvider = (options: {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  eventSigner: EventSigner;
}) => new EventStreamRequestSigner(options);
