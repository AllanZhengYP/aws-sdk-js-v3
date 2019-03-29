import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListMemberAccounts} from '../model/ListMemberAccounts';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListMemberAccountsInput} from '../types/ListMemberAccountsInput';
import {ListMemberAccountsOutput} from '../types/ListMemberAccountsOutput';
import {FMSResolvedConfiguration} from '../FMSConfiguration';
export * from '../types/ListMemberAccountsInput';
export * from '../types/ListMemberAccountsOutput';
export * from '../types/ListMemberAccountsExceptionsUnion';

export class ListMemberAccountsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListMemberAccountsInput,
    OutputTypesUnion,
    ListMemberAccountsOutput,
    FMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListMemberAccountsInput,
        ListMemberAccountsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListMemberAccountsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: FMSResolvedConfiguration
    ): __aws_sdk_types.Handler<ListMemberAccountsInput, ListMemberAccountsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListMemberAccounts
        };

        return stack.resolve(
            handler<ListMemberAccountsInput, ListMemberAccountsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}