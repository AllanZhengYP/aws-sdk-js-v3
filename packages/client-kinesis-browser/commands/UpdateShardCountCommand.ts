import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import {UpdateShardCount} from '../model/UpdateShardCount';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateShardCountInput} from '../types/UpdateShardCountInput';
import {UpdateShardCountOutput} from '../types/UpdateShardCountOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';

export class UpdateShardCountCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateShardCountInput,
    OutputTypesUnion,
    UpdateShardCountOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateShardCountInput,
        UpdateShardCountOutput,
        Blob
    >();

    constructor(readonly input: UpdateShardCountInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateShardCountInput, UpdateShardCountOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateShardCount
        };

        return stack.resolve(
            handler<UpdateShardCountInput, UpdateShardCountOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}