import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {RestoreTableFromBackup} from '../model/RestoreTableFromBackup';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {RestoreTableFromBackupInput} from '../types/RestoreTableFromBackupInput';
import {RestoreTableFromBackupOutput} from '../types/RestoreTableFromBackupOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class RestoreTableFromBackupCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    RestoreTableFromBackupInput,
    OutputTypesUnion,
    RestoreTableFromBackupOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        RestoreTableFromBackupInput,
        RestoreTableFromBackupOutput,
        _stream.Readable
    >();

    constructor(readonly input: RestoreTableFromBackupInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<RestoreTableFromBackupInput, RestoreTableFromBackupOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: RestoreTableFromBackup
        };

        return stack.resolve(
            handler<RestoreTableFromBackupInput, RestoreTableFromBackupOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}