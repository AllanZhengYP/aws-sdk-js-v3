import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DescribeInterconnects} from '../model/DescribeInterconnects';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeInterconnectsInput} from '../types/DescribeInterconnectsInput';
import {DescribeInterconnectsOutput} from '../types/DescribeInterconnectsOutput';
import {DirectConnectResolvedConfiguration} from '../DirectConnectConfiguration';
export * from '../types/DescribeInterconnectsInput';
export * from '../types/DescribeInterconnectsOutput';
export * from '../types/DescribeInterconnectsExceptionsUnion';

export class DescribeInterconnectsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DescribeInterconnectsInput,
    OutputTypesUnion,
    DescribeInterconnectsOutput,
    DirectConnectResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DescribeInterconnectsInput,
        DescribeInterconnectsOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeInterconnectsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DirectConnectResolvedConfiguration
    ): __aws_sdk_types.Handler<DescribeInterconnectsInput, DescribeInterconnectsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeInterconnects
        };

        return stack.resolve(
            handler<DescribeInterconnectsInput, DescribeInterconnectsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}