import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {UpdateGlobalTable} from '../model/UpdateGlobalTable';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateGlobalTableInput} from '../types/UpdateGlobalTableInput';
import {UpdateGlobalTableOutput} from '../types/UpdateGlobalTableOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class UpdateGlobalTableCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    UpdateGlobalTableInput,
    OutputTypesUnion,
    UpdateGlobalTableOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        UpdateGlobalTableInput,
        UpdateGlobalTableOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateGlobalTableInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<UpdateGlobalTableInput, UpdateGlobalTableOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateGlobalTable
        };

        return stack.resolve(
            handler<UpdateGlobalTableInput, UpdateGlobalTableOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}