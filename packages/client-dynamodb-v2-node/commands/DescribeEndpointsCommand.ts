import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {DescribeEndpoints} from '../model/DescribeEndpoints';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeEndpointsInput} from '../types/DescribeEndpointsInput';
import {DescribeEndpointsOutput} from '../types/DescribeEndpointsOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class DescribeEndpointsCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    DescribeEndpointsInput,
    OutputTypesUnion,
    DescribeEndpointsOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        DescribeEndpointsInput,
        DescribeEndpointsOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeEndpointsInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<DescribeEndpointsInput, DescribeEndpointsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeEndpoints
        };

        return stack.resolve(
            handler<DescribeEndpointsInput, DescribeEndpointsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}