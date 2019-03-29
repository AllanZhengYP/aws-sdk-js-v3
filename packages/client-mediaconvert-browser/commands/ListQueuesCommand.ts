import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListQueues} from '../model/ListQueues';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListQueuesInput} from '../types/ListQueuesInput';
import {ListQueuesOutput} from '../types/ListQueuesOutput';
import {MediaConvertResolvedConfiguration} from '../MediaConvertConfiguration';
export * from '../types/ListQueuesInput';
export * from '../types/ListQueuesOutput';
export * from '../types/ListQueuesExceptionsUnion';

export class ListQueuesCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListQueuesInput,
    OutputTypesUnion,
    ListQueuesOutput,
    MediaConvertResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListQueuesInput,
        ListQueuesOutput,
        Blob
    >();

    constructor(readonly input: ListQueuesInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: MediaConvertResolvedConfiguration
    ): __aws_sdk_types.Handler<ListQueuesInput, ListQueuesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListQueues
        };

        return stack.resolve(
            handler<ListQueuesInput, ListQueuesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}