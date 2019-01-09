import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {UpdateTable} from '../model/UpdateTable';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateTableInput} from '../types/UpdateTableInput';
import {UpdateTableOutput} from '../types/UpdateTableOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class UpdateTableCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    UpdateTableInput,
    OutputTypesUnion,
    UpdateTableOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        UpdateTableInput,
        UpdateTableOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateTableInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<UpdateTableInput, UpdateTableOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateTable
        };

        return stack.resolve(
            handler<UpdateTableInput, UpdateTableOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}