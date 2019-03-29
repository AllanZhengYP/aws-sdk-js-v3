import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DescribeLags} from '../model/DescribeLags';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeLagsInput} from '../types/DescribeLagsInput';
import {DescribeLagsOutput} from '../types/DescribeLagsOutput';
import {DirectConnectResolvedConfiguration} from '../DirectConnectConfiguration';
export * from '../types/DescribeLagsInput';
export * from '../types/DescribeLagsOutput';
export * from '../types/DescribeLagsExceptionsUnion';

export class DescribeLagsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DescribeLagsInput,
    OutputTypesUnion,
    DescribeLagsOutput,
    DirectConnectResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DescribeLagsInput,
        DescribeLagsOutput,
        Blob
    >();

    constructor(readonly input: DescribeLagsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DirectConnectResolvedConfiguration
    ): __aws_sdk_types.Handler<DescribeLagsInput, DescribeLagsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeLags
        };

        return stack.resolve(
            handler<DescribeLagsInput, DescribeLagsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}