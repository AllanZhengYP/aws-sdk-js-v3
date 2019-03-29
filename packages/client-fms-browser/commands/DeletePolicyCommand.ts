import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DeletePolicy} from '../model/DeletePolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeletePolicyInput} from '../types/DeletePolicyInput';
import {DeletePolicyOutput} from '../types/DeletePolicyOutput';
import {FMSResolvedConfiguration} from '../FMSConfiguration';
export * from '../types/DeletePolicyInput';
export * from '../types/DeletePolicyOutput';
export * from '../types/DeletePolicyExceptionsUnion';

export class DeletePolicyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeletePolicyInput,
    OutputTypesUnion,
    DeletePolicyOutput,
    FMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeletePolicyInput,
        DeletePolicyOutput,
        Blob
    >();

    constructor(readonly input: DeletePolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: FMSResolvedConfiguration
    ): __aws_sdk_types.Handler<DeletePolicyInput, DeletePolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeletePolicy
        };

        return stack.resolve(
            handler<DeletePolicyInput, DeletePolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}