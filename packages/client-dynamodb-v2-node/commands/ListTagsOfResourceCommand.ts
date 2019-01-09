import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {ListTagsOfResource} from '../model/ListTagsOfResource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTagsOfResourceInput} from '../types/ListTagsOfResourceInput';
import {ListTagsOfResourceOutput} from '../types/ListTagsOfResourceOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class ListTagsOfResourceCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    ListTagsOfResourceInput,
    OutputTypesUnion,
    ListTagsOfResourceOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        ListTagsOfResourceInput,
        ListTagsOfResourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListTagsOfResourceInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<ListTagsOfResourceInput, ListTagsOfResourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTagsOfResource
        };

        return stack.resolve(
            handler<ListTagsOfResourceInput, ListTagsOfResourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}