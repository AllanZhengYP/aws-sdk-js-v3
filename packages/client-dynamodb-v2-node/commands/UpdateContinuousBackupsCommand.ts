import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {UpdateContinuousBackups} from '../model/UpdateContinuousBackups';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateContinuousBackupsInput} from '../types/UpdateContinuousBackupsInput';
import {UpdateContinuousBackupsOutput} from '../types/UpdateContinuousBackupsOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class UpdateContinuousBackupsCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    UpdateContinuousBackupsInput,
    OutputTypesUnion,
    UpdateContinuousBackupsOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        UpdateContinuousBackupsInput,
        UpdateContinuousBackupsOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateContinuousBackupsInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateContinuousBackups
        };

        return stack.resolve(
            handler<UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}