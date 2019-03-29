import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteInterconnect} from '../model/DeleteInterconnect';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteInterconnectInput} from '../types/DeleteInterconnectInput';
import {DeleteInterconnectOutput} from '../types/DeleteInterconnectOutput';
import {DirectConnectResolvedConfiguration} from '../DirectConnectConfiguration';
export * from '../types/DeleteInterconnectInput';
export * from '../types/DeleteInterconnectOutput';
export * from '../types/DeleteInterconnectExceptionsUnion';

export class DeleteInterconnectCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteInterconnectInput,
    OutputTypesUnion,
    DeleteInterconnectOutput,
    DirectConnectResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteInterconnectInput,
        DeleteInterconnectOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteInterconnectInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DirectConnectResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteInterconnectInput, DeleteInterconnectOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteInterconnect
        };

        return stack.resolve(
            handler<DeleteInterconnectInput, DeleteInterconnectOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}