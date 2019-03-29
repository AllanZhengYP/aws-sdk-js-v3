import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DeletePreset} from '../model/DeletePreset';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeletePresetInput} from '../types/DeletePresetInput';
import {DeletePresetOutput} from '../types/DeletePresetOutput';
import {MediaConvertResolvedConfiguration} from '../MediaConvertConfiguration';
export * from '../types/DeletePresetInput';
export * from '../types/DeletePresetOutput';
export * from '../types/DeletePresetExceptionsUnion';

export class DeletePresetCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeletePresetInput,
    OutputTypesUnion,
    DeletePresetOutput,
    MediaConvertResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeletePresetInput,
        DeletePresetOutput,
        Blob
    >();

    constructor(readonly input: DeletePresetInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: MediaConvertResolvedConfiguration
    ): __aws_sdk_types.Handler<DeletePresetInput, DeletePresetOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeletePreset
        };

        return stack.resolve(
            handler<DeletePresetInput, DeletePresetOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}