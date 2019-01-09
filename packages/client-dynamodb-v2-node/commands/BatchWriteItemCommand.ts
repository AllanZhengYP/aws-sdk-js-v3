import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {BatchWriteItem} from '../model/BatchWriteItem';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {BatchWriteItemInput} from '../types/BatchWriteItemInput';
import {BatchWriteItemOutput} from '../types/BatchWriteItemOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class BatchWriteItemCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    BatchWriteItemInput,
    OutputTypesUnion,
    BatchWriteItemOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        BatchWriteItemInput,
        BatchWriteItemOutput,
        _stream.Readable
    >();

    constructor(readonly input: BatchWriteItemInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<BatchWriteItemInput, BatchWriteItemOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: BatchWriteItem
        };

        return stack.resolve(
            handler<BatchWriteItemInput, BatchWriteItemOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}