import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {DescribeTimeToLive} from '../model/DescribeTimeToLive';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeTimeToLiveInput} from '../types/DescribeTimeToLiveInput';
import {DescribeTimeToLiveOutput} from '../types/DescribeTimeToLiveOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class DescribeTimeToLiveCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    DescribeTimeToLiveInput,
    OutputTypesUnion,
    DescribeTimeToLiveOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        DescribeTimeToLiveInput,
        DescribeTimeToLiveOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeTimeToLiveInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<DescribeTimeToLiveInput, DescribeTimeToLiveOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeTimeToLive
        };

        return stack.resolve(
            handler<DescribeTimeToLiveInput, DescribeTimeToLiveOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}