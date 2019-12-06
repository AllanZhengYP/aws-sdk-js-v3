import {
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse,
  AudioStream,
  TranscriptEvent,
  TranscriptResultStream,
  BadRequestException,
  ConflictException,
  InternalFailureException,
  LimitExceededException,
  AudioEvent,
  Result,
  Transcript,
  Alternative,
  Item
} from "../models";
import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  SerdeContext,
  HeaderBag,
  ResponseMetadata,
  Message,
  HttpRequest as IHttpRequest,
  HttpResponse as IHttpResponse,
  EventStreamSerdeContext,
  MessageHeaders
} from "@aws-sdk/types";

export async function startStreamTranscriptionAwsJson1_1Serialize(
  input: StartStreamTranscriptionRequest,
  context: SerdeContext & EventStreamSerdeContext
): Promise<IHttpRequest> {
  let body: any = {};
  let headers: HeaderBag = {
    "x-amz-target":
      "com.amazonaws.transcribe.Transcribe.StartStreamTranscription"
  };

  if (input.MediaEncoding !== undefined) {
    headers["x-amzn-transcribe-media-encoding"] = input.MediaEncoding;
  }

  if (input.VocabularyName !== undefined) {
    headers["x-amzn-transcribe-vocabulary-name"] = input.VocabularyName;
  }

  if (input.SessionId !== undefined) {
    headers["x-amzn-transcribe-session-id"] = input.SessionId;
  }

  if (input.LanguageCode !== undefined) {
    headers["x-amzn-transcribe-language-code"] = input.LanguageCode;
  }

  if (input.MediaSampleRateHertz !== undefined) {
    headers[
      "x-amzn-transcribe-sample-rate"
    ] = input.MediaSampleRateHertz.toString();
  }

  if (input.AudioStream !== undefined) {
    body = context.eventStreamMarshaller.serialize(input.AudioStream, event =>
      audioStreamAwsJson1_1Serialize(event, context)
    );
  }

  return new HttpRequest({
    ...context.endpoint,
    body: body,
    path: "/stream-transcription",
    method: "POST",
    protocol: "https:",
    headers: headers
  });
}

export async function startStreamTranscriptionAwsJson1_1Deserialize(
  output: IHttpResponse,
  context: SerdeContext & EventStreamSerdeContext
): Promise<StartStreamTranscriptionResponse> {
  if (output.statusCode !== 200) {
    return startStreamTranscriptionAwsJson1_1DeserializeError(output, context);
  }
  return Promise.resolve({
    $metadata: deserializeMetadata(output),
    __type: "StartStreamTranscriptionResponse",
    TranscriptResultStream: context.eventStreamMarshaller.deserialize(
      output.body,
      async event => {
        const eventName = Object.keys(event)[0];
        const eventValue = event[eventName];
        const parsedEvent = {
          [eventName]: {
            headers: Object.entries(eventValue.headers).reduce(
              (accummulator, curr) => {
                accummulator[curr[0]] = curr[1].value;
                return accummulator;
              },
              {} as { [key: string]: any } //convert event stream header to normal headers bag
            ),
            body: await parseBody(event[eventName].body, context)
          }
        };
        return transcriptResultStreamAwsJson1_1Deserialize(
          parsedEvent,
          context
        );
      }
    ),
    LanguageCode: output.headers["x-amzn-transcribe-language-code"],
    SessionId: output.headers["x-amzn-transcribe-session-id"],
    MediaSampleRateHertz: parseInt(
      output.headers["x-amzn-transcribe-sample-rate"]
    ),
    MediaEncoding: output.headers["x-amzn-transcribe-media-encoding"],
    RequestId: output.headers["x-amzn-request-id"],
    VocabularyName: output.headers["x-amzn-transcribe-vocabulary-name"]
  });
}

async function startStreamTranscriptionAwsJson1_1DeserializeError(
  output: IHttpResponse,
  context: SerdeContext
): Promise<StartStreamTranscriptionResponse> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: any;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe.streaming#BadRequestException":
      response = deserializeAws_restJsonBadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe.streaming#ConflictException":
      response = deserializeAws_restJsonConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe.streaming#InternalFailureException":
      response = deserializeAws_restJsonInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe.streaming#LimitExceededException":
      response = deserializeAws_restJsonLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.transcribe.streaming#${errorCode}`,
        $name: errorCode,
        $fault: "client"
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const transcriptResultStreamAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): any => {
  return TranscriptResultStream.visit(output, {
    TranscriptEvent: value =>
      transcriptEventAwsJson1_1Deserialize(value, context),
    ConflictException: value =>
      deserializeAws_restJsonConflictExceptionResponse(value, context),
    BadRequestException: value =>
      deserializeAws_restJsonBadRequestExceptionResponse(value, context),
    InternalFailureException: value =>
      deserializeAws_restJsonInternalFailureExceptionResponse(value, context),
    LimitExceededException: value =>
      deserializeAws_restJsonLimitExceededExceptionResponse(value, context),
    _: value => value as any
  });
};

/**event deserializer will be more like command deserializer */
export function transcriptEventAwsJson1_1Deserialize(
  output: any,
  context: SerdeContext
): TranscriptEvent {
  return {
    __type: "TranscriptEvent",
    Transcript: transcriptAwsJson1_1Deserialize(output.body.Transcript, context)
  };
}

const transcriptAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Transcript => ({
  Results: resultsListtAwsJson1_1Deserialize(output.Results, context)
});

const resultsListtAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Array<Result> =>
  (output || []).map((result: any) =>
    resultAwsJson1_1Deserialize(result, context)
  );

const resultAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Result => ({
  ResultId: output.ResultId,
  StartTime: output.StartTime,
  EndTime: output.EndTime,
  IsPartial: output.IsPartial,
  Alternatives: alternativeListAwsJson1_1Deserialize(
    output.Alternatives,
    context
  )
});

const alternativeListAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Array<Alternative> =>
  (output || []).map((alternative: any) =>
    alternativeAwsJson1_1Deserialize(alternative, context)
  );

const alternativeAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Alternative => ({
  Transcript: output.Transcribe,
  Items: itemListAwsJson1_1Deserialize(output.Items, context)
});

const itemListAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Array<Item> =>
  (output || []).map((item: any) => itemAwsJson1_1Deserialize(item, context));

const itemAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Item => ({
  StartTime: output.StartTime,
  EndTime: output.EndTime,
  Type: output.Type,
  Content: output.Content
});

const audioStreamAwsJson1_1Serialize = (
  input: any,
  context: SerdeContext
): any =>
  AudioStream.visit<Message>(input, {
    AudioEvent: value => audioEventAwsJson1_1Serialize(value, context),
    _: (name, value) => ({ headers: {}, body: value })
  });

const audioEventAwsJson1_1Serialize = (
  input: AudioEvent,
  context: SerdeContext
): Message => {
  const headers: MessageHeaders = {
    ":event-type": { type: "string", value: "AudioEvent" },
    ":content-type": { type: "string", value: "application/octet-stream" },
    ":message-type": { type: "string", value: "event" }
  };
  const message: any = {
    headers
  };
  if (input.AudioChunk) {
    message.body = input.AudioChunk;
  }
  return message;
};

const deserializeAws_restJsonBadRequestExceptionResponse = (
  output: any,
  context: SerdeContext
): BadRequestException => {
  const data: any = output.body;
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJsonConflictExceptionResponse = (
  output: any,
  context: SerdeContext
): ConflictException => {
  const data: any = output.body;
  const contents: ConflictException = {
    __type: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJsonInternalFailureExceptionResponse = (
  output: any,
  context: SerdeContext
): InternalFailureException => {
  const data: any = output.body;
  const contents: InternalFailureException = {
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJsonLimitExceededExceptionResponse = (
  output: any,
  context: SerdeContext
): LimitExceededException => {
  const data: any = output.body;
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeMetadata = (output: IHttpResponse): ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (body: any, context: SerdeContext): any => {
  const collected =
    body instanceof Uint8Array
      ? Promise.resolve(body)
      : context.streamCollector(body);
  return collected.then(body => {
    if (body.length) {
      return JSON.parse(context.utf8Encoder(body));
    }
    return {};
  });
};
