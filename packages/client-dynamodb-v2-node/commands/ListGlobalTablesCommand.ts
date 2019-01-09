import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {ListGlobalTables} from '../model/ListGlobalTables';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListGlobalTablesInput} from '../types/ListGlobalTablesInput';
import {ListGlobalTablesOutput} from '../types/ListGlobalTablesOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class ListGlobalTablesCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    ListGlobalTablesInput,
    OutputTypesUnion,
    ListGlobalTablesOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        ListGlobalTablesInput,
        ListGlobalTablesOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListGlobalTablesInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<ListGlobalTablesInput, ListGlobalTablesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListGlobalTables
        };

        return stack.resolve(
            handler<ListGlobalTablesInput, ListGlobalTablesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}