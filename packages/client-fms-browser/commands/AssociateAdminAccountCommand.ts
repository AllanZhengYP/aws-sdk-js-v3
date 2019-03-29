import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {AssociateAdminAccount} from '../model/AssociateAdminAccount';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {AssociateAdminAccountInput} from '../types/AssociateAdminAccountInput';
import {AssociateAdminAccountOutput} from '../types/AssociateAdminAccountOutput';
import {FMSResolvedConfiguration} from '../FMSConfiguration';
export * from '../types/AssociateAdminAccountInput';
export * from '../types/AssociateAdminAccountOutput';
export * from '../types/AssociateAdminAccountExceptionsUnion';

export class AssociateAdminAccountCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    AssociateAdminAccountInput,
    OutputTypesUnion,
    AssociateAdminAccountOutput,
    FMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        AssociateAdminAccountInput,
        AssociateAdminAccountOutput,
        Blob
    >();

    constructor(readonly input: AssociateAdminAccountInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: FMSResolvedConfiguration
    ): __aws_sdk_types.Handler<AssociateAdminAccountInput, AssociateAdminAccountOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: AssociateAdminAccount
        };

        return stack.resolve(
            handler<AssociateAdminAccountInput, AssociateAdminAccountOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}