import { StreamCollector } from "@aws-sdk/types";

export const streamCollector: StreamCollector = (
  stream: ReadableStream
): Promise<Uint8Array> => {
  return new Response(stream).blob().then(blob => {
    const reader = new FileReader();
    reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(stream);
  });
};
