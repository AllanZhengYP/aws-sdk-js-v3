import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdatePreset} from '../model/UpdatePreset';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdatePresetInput} from '../types/UpdatePresetInput';
import {UpdatePresetOutput} from '../types/UpdatePresetOutput';
import {MediaConvertResolvedConfiguration} from '../MediaConvertConfiguration';
export * from '../types/UpdatePresetInput';
export * from '../types/UpdatePresetOutput';
export * from '../types/UpdatePresetExceptionsUnion';

export class UpdatePresetCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdatePresetInput,
    OutputTypesUnion,
    UpdatePresetOutput,
    MediaConvertResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdatePresetInput,
        UpdatePresetOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdatePresetInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MediaConvertResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdatePresetInput, UpdatePresetOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdatePreset
        };

        return stack.resolve(
            handler<UpdatePresetInput, UpdatePresetOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}