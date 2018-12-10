import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import {UpdateGlobalTableSettings} from '../model/UpdateGlobalTableSettings';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateGlobalTableSettingsInput} from '../types/UpdateGlobalTableSettingsInput';
import {UpdateGlobalTableSettingsOutput} from '../types/UpdateGlobalTableSettingsOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class UpdateGlobalTableSettingsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateGlobalTableSettingsInput,
    OutputTypesUnion,
    UpdateGlobalTableSettingsOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateGlobalTableSettingsInput,
        UpdateGlobalTableSettingsOutput,
        Blob
    >();

    constructor(readonly input: UpdateGlobalTableSettingsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateGlobalTableSettingsInput, UpdateGlobalTableSettingsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateGlobalTableSettings
        };

        return stack.resolve(
            handler<UpdateGlobalTableSettingsInput, UpdateGlobalTableSettingsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}