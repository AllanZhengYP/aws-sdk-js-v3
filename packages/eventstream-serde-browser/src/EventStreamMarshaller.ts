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

  /**
   * Generate a ReadableStream that serialize events
   * to event stream binary chunks; Use a pull stream
   * here to support low connection speed.
   *
   * TODO: add integration test for it function when
   * any AWS service supports browser eventstream
   * request.
   */
  serialize<T>(
    input: AsyncIterable<T>,
    serializer: (event: T) => Message
  ): ReadableStream {
    const inputIterator = input[Symbol.asyncIterator]();
    const self = this;
    let generatorDone = false;
    const stream = new ReadableStream({
      async pull(controller) {
        const chunk = await inputIterator.next();
        if (chunk.done && generatorDone) {
          controller.close();
          return;
        }
        const payloadBuf = chunk.done
          ? new Uint8Array(0)
          : self.eventMarshaller.marshall(serializer(chunk.value));
        controller.enqueue(payloadBuf);
        if (chunk.done && !generatorDone) generatorDone = true;
      }
    });
    return stream;
  }
}
