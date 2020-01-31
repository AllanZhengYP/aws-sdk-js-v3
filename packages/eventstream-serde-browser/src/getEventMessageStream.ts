import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import { Message } from "@aws-sdk/types";

export function getEventMessageStream(
  chunkedStream: ReadableStream<Uint8Array>,
  eventMarshaller: EventMarshaller
): ReadableStream<{ [name: string]: Message }> {
  const chunkReader = chunkedStream.getReader();
  const messageStream = new ReadableStream<{ [name: string]: Message }>({
    start(controller) {
      function push() {
        chunkReader.read().then(({ done, value }) => {
          if (done) {
            controller.close();
            return;
          }

          const message = eventMarshaller.unmarshall(value);
          const { value: messageType } = message.headers[":message-type"];
          if (messageType === "exception") {
            // throw this.exceptionsDeserializer(message);
            controller.enqueue({
              [message.headers[":exception-type"].value as string]: message
            });
          } else if (messageType === "event") {
            controller.enqueue({
              [message.headers[":event-type"].value as string]: message
            });
          } else {
            throw Error(
              `Unrecognizable event type: ${message.headers[":event-type"].value}`
            );
          }
          push();
        });
      }

      push();
    }
  });

  return messageStream;
}
