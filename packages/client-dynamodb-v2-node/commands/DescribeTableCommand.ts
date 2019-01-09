import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {DescribeTable} from '../model/DescribeTable';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeTableInput} from '../types/DescribeTableInput';
import {DescribeTableOutput} from '../types/DescribeTableOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class DescribeTableCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    DescribeTableInput,
    OutputTypesUnion,
    DescribeTableOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        DescribeTableInput,
        DescribeTableOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeTableInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<DescribeTableInput, DescribeTableOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeTable
        };

        return stack.resolve(
            handler<DescribeTableInput, DescribeTableOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}