import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {CreateBackup} from '../model/CreateBackup';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateBackupInput} from '../types/CreateBackupInput';
import {CreateBackupOutput} from '../types/CreateBackupOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class CreateBackupCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    CreateBackupInput,
    OutputTypesUnion,
    CreateBackupOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        CreateBackupInput,
        CreateBackupOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateBackupInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<CreateBackupInput, CreateBackupOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateBackup
        };

        return stack.resolve(
            handler<CreateBackupInput, CreateBackupOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}