import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import {
  Encoder,
  Decoder,
  Message,
  EventStreamMarshaller as IEventStreamMarshaller
} from "@aws-sdk/types";
import { ReadableStreamtoIterable } from "./utils";
import { getChunkedStream } from "./getChunkedStream";
import { getEventMessageStream } from "./getEventMessageStream";
import { getDeserializingStream } from "./getDeserializingStream";

export interface EventStreamMarshaller extends IEventStreamMarshaller {}

export interface EventStreamMarshallerOptions {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
}

export class EventStreamMarshaller {
  private readonly eventMarshaller: EventMarshaller;
  constructor({ utf8Encoder, utf8Decoder }: EventStreamMarshallerOptions) {
    this.eventMarshaller = new EventMarshaller(utf8Encoder, utf8Decoder);
  }

  deserialize<T>(
    body: ReadableStream,
    deserializer: (input: { [event: string]: Message }) => T
  ): AsyncIterable<T> {
    const chunkedStream = getChunkedStream(body);
    const messageStream = getEventMessageStream(
      chunkedStream,
      this.eventMarshaller
    );
    const deserialingStream = getDeserializingStream(
      messageStream,
      deserializer
    );
    return ReadableStreamtoIterable(deserialingStream);
  }

  serialize<T>(
    input: AsyncIterable<T>,
    serializer: (event: T) => Message
  ): ReadableStream {
    //TODO: sending event stream in request is not yet supported in browser
    throw new Error(
      "Sending event stream in request is not yet supported in browser"
    );
  }
}
