import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {BatchGetItem} from '../model/BatchGetItem';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {BatchGetItemInput} from '../types/BatchGetItemInput';
import {BatchGetItemOutput} from '../types/BatchGetItemOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class BatchGetItemCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    BatchGetItemInput,
    OutputTypesUnion,
    BatchGetItemOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        BatchGetItemInput,
        BatchGetItemOutput,
        _stream.Readable
    >();

    constructor(readonly input: BatchGetItemInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<BatchGetItemInput, BatchGetItemOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: BatchGetItem
        };

        return stack.resolve(
            handler<BatchGetItemInput, BatchGetItemOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}