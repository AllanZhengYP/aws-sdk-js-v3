import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {CreateGlobalTable} from '../model/CreateGlobalTable';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateGlobalTableInput} from '../types/CreateGlobalTableInput';
import {CreateGlobalTableOutput} from '../types/CreateGlobalTableOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class CreateGlobalTableCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    CreateGlobalTableInput,
    OutputTypesUnion,
    CreateGlobalTableOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        CreateGlobalTableInput,
        CreateGlobalTableOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateGlobalTableInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<CreateGlobalTableInput, CreateGlobalTableOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateGlobalTable
        };

        return stack.resolve(
            handler<CreateGlobalTableInput, CreateGlobalTableOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}