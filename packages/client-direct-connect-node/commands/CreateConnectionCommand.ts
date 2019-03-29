import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateConnection} from '../model/CreateConnection';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateConnectionInput} from '../types/CreateConnectionInput';
import {CreateConnectionOutput} from '../types/CreateConnectionOutput';
import {DirectConnectResolvedConfiguration} from '../DirectConnectConfiguration';
export * from '../types/CreateConnectionInput';
export * from '../types/CreateConnectionOutput';
export * from '../types/CreateConnectionExceptionsUnion';

export class CreateConnectionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateConnectionInput,
    OutputTypesUnion,
    CreateConnectionOutput,
    DirectConnectResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateConnectionInput,
        CreateConnectionOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateConnectionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DirectConnectResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateConnectionInput, CreateConnectionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateConnection
        };

        return stack.resolve(
            handler<CreateConnectionInput, CreateConnectionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}