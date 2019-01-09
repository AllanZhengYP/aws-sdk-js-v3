import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {PutItem} from '../model/PutItem';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutItemInput} from '../types/PutItemInput';
import {PutItemOutput} from '../types/PutItemOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class PutItemCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    PutItemInput,
    OutputTypesUnion,
    PutItemOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        PutItemInput,
        PutItemOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutItemInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<PutItemInput, PutItemOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutItem
        };

        return stack.resolve(
            handler<PutItemInput, PutItemOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}