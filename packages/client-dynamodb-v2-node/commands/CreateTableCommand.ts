import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {CreateTable} from '../model/CreateTable';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateTableInput} from '../types/CreateTableInput';
import {CreateTableOutput} from '../types/CreateTableOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class CreateTableCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    CreateTableInput,
    OutputTypesUnion,
    CreateTableOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        CreateTableInput,
        CreateTableOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateTableInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<CreateTableInput, CreateTableOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateTable
        };

        return stack.resolve(
            handler<CreateTableInput, CreateTableOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}