import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import {CreateTable} from '../model/CreateTable';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateTableInput} from '../types/CreateTableInput';
import {CreateTableOutput} from '../types/CreateTableOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class CreateTableCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateTableInput,
    OutputTypesUnion,
    CreateTableOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateTableInput,
        CreateTableOutput,
        Blob
    >();

    constructor(readonly input: CreateTableInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateTableInput, CreateTableOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateTable
        };

        return stack.resolve(
            handler<CreateTableInput, CreateTableOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}