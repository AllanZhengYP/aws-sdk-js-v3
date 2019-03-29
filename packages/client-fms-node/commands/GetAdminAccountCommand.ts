import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetAdminAccount} from '../model/GetAdminAccount';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetAdminAccountInput} from '../types/GetAdminAccountInput';
import {GetAdminAccountOutput} from '../types/GetAdminAccountOutput';
import {FMSResolvedConfiguration} from '../FMSConfiguration';
export * from '../types/GetAdminAccountInput';
export * from '../types/GetAdminAccountOutput';
export * from '../types/GetAdminAccountExceptionsUnion';

export class GetAdminAccountCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetAdminAccountInput,
    OutputTypesUnion,
    GetAdminAccountOutput,
    FMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetAdminAccountInput,
        GetAdminAccountOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetAdminAccountInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: FMSResolvedConfiguration
    ): __aws_sdk_types.Handler<GetAdminAccountInput, GetAdminAccountOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetAdminAccount
        };

        return stack.resolve(
            handler<GetAdminAccountInput, GetAdminAccountOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}