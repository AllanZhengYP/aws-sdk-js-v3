import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {ListBackups} from '../model/ListBackups';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListBackupsInput} from '../types/ListBackupsInput';
import {ListBackupsOutput} from '../types/ListBackupsOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class ListBackupsCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    ListBackupsInput,
    OutputTypesUnion,
    ListBackupsOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        ListBackupsInput,
        ListBackupsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListBackupsInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<ListBackupsInput, ListBackupsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListBackups
        };

        return stack.resolve(
            handler<ListBackupsInput, ListBackupsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}