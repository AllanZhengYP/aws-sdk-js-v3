import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import {DescribeStreamSummary} from '../model/DescribeStreamSummary';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeStreamSummaryInput} from '../types/DescribeStreamSummaryInput';
import {DescribeStreamSummaryOutput} from '../types/DescribeStreamSummaryOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';

export class DescribeStreamSummaryCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DescribeStreamSummaryInput,
    OutputTypesUnion,
    DescribeStreamSummaryOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DescribeStreamSummaryInput,
        DescribeStreamSummaryOutput,
        Blob
    >();

    constructor(readonly input: DescribeStreamSummaryInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<DescribeStreamSummaryInput, DescribeStreamSummaryOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeStreamSummary
        };

        return stack.resolve(
            handler<DescribeStreamSummaryInput, DescribeStreamSummaryOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}