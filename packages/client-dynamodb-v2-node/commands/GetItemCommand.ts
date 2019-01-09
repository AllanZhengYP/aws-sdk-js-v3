import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {GetItem} from '../model/GetItem';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetItemInput} from '../types/GetItemInput';
import {GetItemOutput} from '../types/GetItemOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class GetItemCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    GetItemInput,
    OutputTypesUnion,
    GetItemOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        GetItemInput,
        GetItemOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetItemInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<GetItemInput, GetItemOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetItem
        };

        return stack.resolve(
            handler<GetItemInput, GetItemOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}