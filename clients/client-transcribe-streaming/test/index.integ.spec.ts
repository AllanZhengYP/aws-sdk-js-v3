import { TranscribeStreaming } from "../index";
import { createReadStream } from "fs";
import { join } from "path";

describe("TranscribeStream client", () => {
  const client = new TranscribeStreaming({});
  afterAll(() => {
    client.destroy();
  });

  it("should stream the transcript", async () => {
    const LanguageCode = "en-US";
    const MediaEncoding = "pcm";
    const MediaSampleRateHertz = 8000;
    const result = await client.startStreamTranscription({
      LanguageCode,
      MediaEncoding,
      MediaSampleRateHertz,
      AudioStream: (async function* () {
        for await (const chunk of createReadStream(
          join(__dirname, "speech.wav"),
          {
            highWaterMark: 10 * 1000
          }
        )) {
          yield { AudioEvent: { AudioChunk: chunk } };
        }
      })(),
    });
    expect(result.LanguageCode).toBe(LanguageCode);
    expect(result.MediaEncoding).toBe(MediaEncoding);
    expect(result.MediaSampleRateHertz).toBe(MediaSampleRateHertz);
    expect(result.TranscriptResultStream).toBeDefined();
    let transcripts = "";
    for await (const event of result.TranscriptResultStream!) {
      const results = event.TranscriptEvent?.Transcript?.Results;
      if (
        results &&
        results.length > 0 &&
        results[0].Alternatives &&
        results[0].Alternatives.length > 0
      ) {
        const transcript = `${results[0].Alternatives[0].Transcript}\n`;
        transcripts += transcript;
      }
    }
    expect(transcripts.indexOf("But what if somebody") > -1).toBe(true);
  }, 60000);
});
