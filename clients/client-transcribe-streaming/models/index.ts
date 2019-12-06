import * as _smithy from "../lib/smithy";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *       <zonbook>
 *          <para>A list of possible transcriptions for the audio.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>A list of possible transcriptions for the audio.</p>
 *       </xhtml>
 *
 */
export interface Alternative {
  __type?: "Alternative";
  /**
   *
   *       <zonbook>
   *          <para>One or more alternative interpretations of the input audio. </para>
   *       </zonbook>
   *       <xhtml>
   *          <p>One or more alternative interpretations of the input audio. </p>
   *       </xhtml>
   *
   */
  Items?: Array<Item>;

  /**
   *
   *       <zonbook>
   *          <para>The text that was transcribed from the audio.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The text that was transcribed from the audio.</p>
   *       </xhtml>
   *
   */
  Transcript?: string;
}

export namespace Alternative {
  export function isa(o: any): o is Alternative {
    return _smithy.isa(o, "Alternative");
  }
}

/**
 *
 *       <zonbook>
 *
 *          <para>Provides a wrapper for the audio chunks that you are sending.</para>
 *       </zonbook>
 *       <xhtml>
 *
 *          <p>Provides a wrapper for the audio chunks that you are sending.</p>
 *       </xhtml>
 *
 */
export interface AudioEvent {
  __type?: "AudioEvent";
  /**
   *
   *       <zonbook>
   *          <para>An audio blob that contains the next part of the audio that you want to transcribe.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>An audio blob that contains the next part of the audio that you want to transcribe.</p>
   *       </xhtml>
   *
   */
  AudioChunk?: Uint8Array;
}

export namespace AudioEvent {
  export function isa(o: any): o is AudioEvent {
    return _smithy.isa(o, "AudioEvent");
  }
}

/**
 *
 *       <zonbook>
 *          <para>Represents the audio stream from your application to Amazon Transcribe.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>Represents the audio stream from your application to Amazon Transcribe.</p>
 *       </xhtml>
 *
 */
export type AudioStream =
  | AudioStream.AudioEventMember
  | AudioStream.$UnknownMember;

export namespace AudioStream {
  interface $Base {
    __type?: "AudioStream";
  }
  /**
   *
   *       <zonbook>
   *          <para>A blob of audio from your application. You audio stream consists of one or more audio
   *       events.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>A blob of audio from your application. You audio stream consists of one or more audio
   *       events.</p>
   *       </xhtml>
   *
   */
  export interface AudioEventMember extends $Base {
    AudioEvent: AudioEvent;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    AudioEvent?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    AudioEvent: (value: AudioEvent) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: AudioStream, visitor: Visitor<T>): T {
    if (value.AudioEvent !== undefined)
      return visitor.AudioEvent(value.AudioEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 *
 *       <zonbook>
 *          <para>One or more arguments to the <code>StartStreamTranscription</code> operation was invalid.
 *       For example, <code>MediaEncoding</code> was not set to <code>pcm</code> or
 *         <code>LanguageCode</code> was not set to a valid code. Check the parameters and try your
 *       request again.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>One or more arguments to the <code>StartStreamTranscription</code> operation was invalid.
 *       For example, <code>MediaEncoding</code> was not set to <code>pcm</code> or
 *         <code>LanguageCode</code> was not set to a valid code. Check the parameters and try your
 *       request again.</p>
 *       </xhtml>
 *
 */
export interface BadRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return _smithy.isa(o, "BadRequestException");
  }
}

/**
 *
 *       <zonbook>
 *          <para>A new stream started with the same session ID. The current stream has been
 *       terminated.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>A new stream started with the same session ID. The current stream has been
 *       terminated.</p>
 *       </xhtml>
 *
 */
export interface ConflictException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return _smithy.isa(o, "ConflictException");
  }
}

/**
 *
 *       <zonbook>
 *          <para>A problem occurred while processing the audio. Amazon Transcribe terminated processing. Try your
 *       request again.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>A problem occurred while processing the audio. Amazon Transcribe terminated processing. Try your
 *       request again.</p>
 *       </xhtml>
 *
 */
export interface InternalFailureException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalFailureException";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return _smithy.isa(o, "InternalFailureException");
  }
}

/**
 *
 *       <zonbook>
 *          <para>A word or phrase transcribed from the input audio.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>A word or phrase transcribed from the input audio.</p>
 *       </xhtml>
 *
 */
export interface Item {
  __type?: "Item";
  /**
   *
   *       <zonbook>
   *          <para>The word or punctuation that was recognized in the input audio.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The word or punctuation that was recognized in the input audio.</p>
   *       </xhtml>
   *
   */
  Content?: string;

  /**
   *
   *       <zonbook>
   *          <para>The offset from the beginning of the audio stream to the end of the audio that resulted in
   *       the item.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The offset from the beginning of the audio stream to the end of the audio that resulted in
   *       the item.</p>
   *       </xhtml>
   *
   */
  EndTime?: number;

  /**
   *
   *       <zonbook>
   *          <para>The offset from the beginning of the audio stream to the beginning of the audio that
   *       resulted in the item.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The offset from the beginning of the audio stream to the beginning of the audio that
   *       resulted in the item.</p>
   *       </xhtml>
   *
   */
  StartTime?: number;

  /**
   *
   *       <zonbook>
   *          <para>The type of the item. <code>PRONUNCIATION</code> indicates that the item is a word that
   *       was recognized in the input audio. <code>PUNCTUATION</code> indicates that the item was
   *       interpreted as a pause in the input audio.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The type of the item. <code>PRONUNCIATION</code> indicates that the item is a word that
   *       was recognized in the input audio. <code>PUNCTUATION</code> indicates that the item was
   *       interpreted as a pause in the input audio.</p>
   *       </xhtml>
   *
   */
  Type?: ItemType | string;
}

export namespace Item {
  export function isa(o: any): o is Item {
    return _smithy.isa(o, "Item");
  }
}

export enum ItemType {
  PRONUNCIATION = "pronunciation",
  PUNCTUATION = "punctuation"
}

export enum LanguageCode {
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_US = "en-US",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR"
}

/**
 *
 *       <zonbook>
 *          <para>You have exceeded the maximum number of concurrent transcription streams, are starting
 *       transcription streams too quickly, or the maximum audio length of 4 hours. Wait until a stream
 *       has finished processing, or break your audio stream into smaller chunks and try your request
 *       again.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>You have exceeded the maximum number of concurrent transcription streams, are starting
 *       transcription streams too quickly, or the maximum audio length of 4 hours. Wait until a stream
 *       has finished processing, or break your audio stream into smaller chunks and try your request
 *       again.</p>
 *       </xhtml>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 *
 *       <zonbook>
 *          <para>The result of transcribing a portion of the input audio stream. </para>
 *       </zonbook>
 *       <xhtml>
 *          <p>The result of transcribing a portion of the input audio stream. </p>
 *       </xhtml>
 *
 */
export interface Result {
  __type?: "Result";
  /**
   *
   *       <zonbook>
   *          <para>A list of possible transcriptions for the audio. Each alternative typically contains one
   *         <code>item</code> that contains the result of the transcription.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>A list of possible transcriptions for the audio. Each alternative typically contains one
   *         <code>item</code> that contains the result of the transcription.</p>
   *       </xhtml>
   *
   */
  Alternatives?: Array<Alternative>;

  /**
   *
   *       <zonbook>
   *          <para>The offset in seconds from the beginning of the audio stream to the end of the
   *       result.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The offset in seconds from the beginning of the audio stream to the end of the
   *       result.</p>
   *       </xhtml>
   *
   */
  EndTime?: number;

  /**
   *
   *       <zonbook>
   *          <para>Amazon Transcribe divides the incoming audio stream into segments at natural points in the audio.
   *       Transcription results are returned based on these segments. </para>
   *          <para>The <code>IsPartial</code> field is <code>true</code> to indicate that Amazon Transcribe has
   *       additional transcription data to send, <code>false</code> to indicate that this is the last
   *       transcription result for the segment.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>Amazon Transcribe divides the incoming audio stream into segments at natural points in the audio.
   *       Transcription results are returned based on these segments. </p>
   *          <p>The <code>IsPartial</code> field is <code>true</code> to indicate that Amazon Transcribe has
   *       additional transcription data to send, <code>false</code> to indicate that this is the last
   *       transcription result for the segment.</p>
   *       </xhtml>
   *
   */
  IsPartial?: boolean;

  /**
   *
   *       <zonbook>
   *          <para>A unique identifier for the result. </para>
   *       </zonbook>
   *       <xhtml>
   *          <p>A unique identifier for the result. </p>
   *       </xhtml>
   *
   */
  ResultId?: string;

  /**
   *
   *       <zonbook>
   *          <para>The offset in seconds from the beginning of the audio stream to the beginning of the
   *       result.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The offset in seconds from the beginning of the audio stream to the beginning of the
   *       result.</p>
   *       </xhtml>
   *
   */
  StartTime?: number;
}

export namespace Result {
  export function isa(o: any): o is Result {
    return _smithy.isa(o, "Result");
  }
}

export interface StartStreamTranscriptionRequest {
  __type?: "StartStreamTranscriptionRequest";
  /**
   *
   *       <zonbook>
   *          <para>PCM-encoded stream of audio blobs. The audio stream is encoded as an HTTP2 data
   *       frame.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>PCM-encoded stream of audio blobs. The audio stream is encoded as an HTTP2 data
   *       frame.</p>
   *       </xhtml>
   *
   */
  AudioStream?: AsyncIterable<AudioStream>;

  /**
   *
   *       <zonbook>
   *          <para>Indicates the source language used in the input audio stream.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>Indicates the source language used in the input audio stream.</p>
   *       </xhtml>
   *
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   *
   *       <zonbook>
   *          <para>The encoding used for the input audio. </para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The encoding used for the input audio. </p>
   *       </xhtml>
   *
   */
  MediaEncoding: MediaEncoding | string | undefined;

  /**
   *
   *       <zonbook>
   *          <para>The sample rate, in Hertz, of the input audio. We suggest that you use 8000 Hz for low
   *       quality audio and 16000 Hz for high quality audio.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The sample rate, in Hertz, of the input audio. We suggest that you use 8000 Hz for low
   *       quality audio and 16000 Hz for high quality audio.</p>
   *       </xhtml>
   *
   */
  MediaSampleRateHertz: number | undefined;

  /**
   *
   *       <zonbook>
   *          <para>A identifier for the transcription session. Use this parameter when you want to retry a
   *       session. If you don't provide a session ID, Amazon Transcribe will generate one for you and return it in
   *       the response.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>A identifier for the transcription session. Use this parameter when you want to retry a
   *       session. If you don't provide a session ID, Amazon Transcribe will generate one for you and return it in
   *       the response.</p>
   *       </xhtml>
   *
   */
  SessionId?: string;

  /**
   *
   *       <zonbook>
   *          <para>The name of the vocabulary to use when processing the transcription job.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The name of the vocabulary to use when processing the transcription job.</p>
   *       </xhtml>
   *
   */
  VocabularyName?: string;
}

export namespace StartStreamTranscriptionRequest {
  export function isa(o: any): o is StartStreamTranscriptionRequest {
    return _smithy.isa(o, "StartStreamTranscriptionRequest");
  }
}

export interface StartStreamTranscriptionResponse extends $MetadataBearer {
  __type?: "StartStreamTranscriptionResponse";
  /**
   *
   *       <zonbook>
   *          <para>The language code for the input audio stream.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The language code for the input audio stream.</p>
   *       </xhtml>
   *
   */
  LanguageCode?: LanguageCode | string;

  /**
   *
   *       <zonbook>
   *          <para>The encoding used for the input audio stream.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The encoding used for the input audio stream.</p>
   *       </xhtml>
   *
   */
  MediaEncoding?: MediaEncoding | string;

  /**
   *
   *       <zonbook>
   *          <para>The sample rate for the input audio stream. Use 8000 Hz for low quality audio and 16000 Hz
   *       for high quality audio.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The sample rate for the input audio stream. Use 8000 Hz for low quality audio and 16000 Hz
   *       for high quality audio.</p>
   *       </xhtml>
   *
   */
  MediaSampleRateHertz?: number;

  /**
   *
   *       <zonbook>
   *          <para>An identifier for the streaming transcription.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>An identifier for the streaming transcription.</p>
   *       </xhtml>
   *
   */
  RequestId?: string;

  /**
   *
   *       <zonbook>
   *          <para>An identifier for a specific transcription session.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>An identifier for a specific transcription session.</p>
   *       </xhtml>
   *
   */
  SessionId?: string;

  /**
   *
   *       <zonbook>
   *          <para>Represents the stream of transcription events from Amazon Transcribe to your application.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>Represents the stream of transcription events from Amazon Transcribe to your application.</p>
   *       </xhtml>
   *
   */
  TranscriptResultStream?: AsyncIterable<TranscriptResultStream>;

  /**
   *
   *       <zonbook>
   *          <para>The name of the vocabulary used when processing the job.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The name of the vocabulary used when processing the job.</p>
   *       </xhtml>
   *
   */
  VocabularyName?: string;
}

export namespace StartStreamTranscriptionResponse {
  export function isa(o: any): o is StartStreamTranscriptionResponse {
    return _smithy.isa(o, "StartStreamTranscriptionResponse");
  }
}

/**
 *
 *       <zonbook>
 *          <para>The transcription in a <xref linkend="TranscriptEvent"></xref>.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>The transcription in a <a>TranscriptEvent</a>.</p>
 *       </xhtml>
 *
 */
export interface Transcript {
  __type?: "Transcript";
  /**
   *
   *       <zonbook>
   *          <para>
   *             <xref linkend="Result"></xref> objects that contain the results of transcribing a portion of the
   *       input audio stream. The array can be empty.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>
   *             <a>Result</a> objects that contain the results of transcribing a portion of the
   *       input audio stream. The array can be empty.</p>
   *       </xhtml>
   *
   */
  Results?: Array<Result>;
}

export namespace Transcript {
  export function isa(o: any): o is Transcript {
    return _smithy.isa(o, "Transcript");
  }
}

/**
 *
 *       <zonbook>
 *          <para>Represents a set of transcription results from the server to the client. It contains one
 *       or more segments of the transcription.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>Represents a set of transcription results from the server to the client. It contains one
 *       or more segments of the transcription.</p>
 *       </xhtml>
 *
 */
export interface TranscriptEvent {
  __type?: "TranscriptEvent";
  /**
   *
   *       <zonbook>
   *          <para>The transcription of the audio stream. The transcription is composed of all of the items
   *       in the results list.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>The transcription of the audio stream. The transcription is composed of all of the items
   *       in the results list.</p>
   *       </xhtml>
   *
   */
  Transcript?: Transcript;
}

export namespace TranscriptEvent {
  export function isa(o: any): o is TranscriptEvent {
    return _smithy.isa(o, "TranscriptEvent");
  }
}

/**
 *
 *       <zonbook>
 *          <para>Represents the transcription result stream from Amazon Transcribe to your application.</para>
 *       </zonbook>
 *       <xhtml>
 *          <p>Represents the transcription result stream from Amazon Transcribe to your application.</p>
 *       </xhtml>
 *
 */
export type TranscriptResultStream =
  | TranscriptResultStream.BadRequestExceptionMember
  | TranscriptResultStream.ConflictExceptionMember
  | TranscriptResultStream.InternalFailureExceptionMember
  | TranscriptResultStream.LimitExceededExceptionMember
  | TranscriptResultStream.TranscriptEventMember
  | TranscriptResultStream.$UnknownMember;

export namespace TranscriptResultStream {
  interface $Base {
    __type?: "TranscriptResultStream";
  }
  /**
   *
   *       <zonbook>
   *          <para>A client error occurred when the stream was created. Check the parameters of the request
   *       and try your request again.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>A client error occurred when the stream was created. Check the parameters of the request
   *       and try your request again.</p>
   *       </xhtml>
   *
   */
  export interface BadRequestExceptionMember extends $Base {
    BadRequestException: BadRequestException;
    ConflictException?: never;
    InternalFailureException?: never;
    LimitExceededException?: never;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  /**
   *
   *       <zonbook>
   *          <para>A new stream started with the same session ID. The current stream has been
   *       terminated.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>A new stream started with the same session ID. The current stream has been
   *       terminated.</p>
   *       </xhtml>
   *
   */
  export interface ConflictExceptionMember extends $Base {
    BadRequestException?: never;
    ConflictException: ConflictException;
    InternalFailureException?: never;
    LimitExceededException?: never;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  /**
   *
   *       <zonbook>
   *          <para>A problem occurred while processing the audio. Amazon Transcribe terminated processing.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>A problem occurred while processing the audio. Amazon Transcribe terminated processing.</p>
   *       </xhtml>
   *
   */
  export interface InternalFailureExceptionMember extends $Base {
    BadRequestException?: never;
    ConflictException?: never;
    InternalFailureException: InternalFailureException;
    LimitExceededException?: never;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  /**
   *
   *       <zonbook>
   *          <para>Your client has exceeded one of the Amazon Transcribe limits, typically the limit on audio length.
   *       Break your audio stream into smaller chunks and try your request again.</para>
   *       </zonbook>
   *       <xhtml>
   *          <p>Your client has exceeded one of the Amazon Transcribe limits, typically the limit on audio length.
   *       Break your audio stream into smaller chunks and try your request again.</p>
   *       </xhtml>
   *
   */
  export interface LimitExceededExceptionMember extends $Base {
    BadRequestException?: never;
    ConflictException?: never;
    InternalFailureException?: never;
    LimitExceededException: LimitExceededException;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  /**
   *
   *       <zonbook>
   *          <para>A portion of the transcription of the audio stream. Events are sent periodically from
   *       Amazon Transcribe to your application. The event can be a partial transcription of a section of the audio
   *       stream, or it can be the entire transcription of that portion of the audio stream.
   *       </para>
   *       </zonbook>
   *       <xhtml>
   *          <p>A portion of the transcription of the audio stream. Events are sent periodically from
   *       Amazon Transcribe to your application. The event can be a partial transcription of a section of the audio
   *       stream, or it can be the entire transcription of that portion of the audio stream.
   *       </p>
   *       </xhtml>
   *
   */
  export interface TranscriptEventMember extends $Base {
    BadRequestException?: never;
    ConflictException?: never;
    InternalFailureException?: never;
    LimitExceededException?: never;
    TranscriptEvent: TranscriptEvent;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    BadRequestException?: never;
    ConflictException?: never;
    InternalFailureException?: never;
    LimitExceededException?: never;
    TranscriptEvent?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    BadRequestException: (value: BadRequestException) => T;
    ConflictException: (value: ConflictException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    TranscriptEvent: (value: TranscriptEvent) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(
    value: TranscriptResultStream,
    visitor: Visitor<T>
  ): T {
    if (value.BadRequestException !== undefined)
      return visitor.BadRequestException(value.BadRequestException);
    if (value.ConflictException !== undefined)
      return visitor.ConflictException(value.ConflictException);
    if (value.InternalFailureException !== undefined)
      return visitor.InternalFailureException(value.InternalFailureException);
    if (value.LimitExceededException !== undefined)
      return visitor.LimitExceededException(value.LimitExceededException);
    if (value.TranscriptEvent !== undefined)
      return visitor.TranscriptEvent(value.TranscriptEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

export enum MediaEncoding {
  PCM = "pcm"
}
