import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_middleware_serializer from "@aws-sdk/middleware-serializer";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTablesSerializer } from "../model/serializer/ListStreams";
import { ListTablesDeserializer } from "../model/deserializer/ListStreams";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStreamsInput } from "../types/ListStreamsInput";
import { ListStreamsOutput } from "../types/ListStreamsOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/ListStreamsInput";
export * from "../types/ListStreamsOutput";
export * from "../types/ListStreamsExceptionsUnion";

export class ListStreamsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStreamsInput,
      OutputTypesUnion,
      ListStreamsOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStreamsInput,
    ListStreamsOutput
  >();

  constructor(readonly input: ListStreamsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<ListStreamsInput, ListStreamsOutput> {
    const { protocol } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any
    };
    this.middlewareStack.add(
      __aws_sdk_middleware_serializer.serializerMiddleware(
        configuration.protocol,
        ListTablesSerializer
      ),
      {
        step: "serialize",
        priority: 90,
        tags: { SERIALIZER: true }
      }
    );
    this.middlewareStack.add(
      __aws_sdk_middleware_serializer.serializerMiddleware(
        configuration.protocol,
        ListTablesDeserializer
      ) as any,
      {
        step: "deserialize",
        priority: Infinity,
        tags: { DESERIALIZER: true }
      }
    );

    return stack.resolve(protocol.handler.handle, handlerExecutionContext);
  }
}
