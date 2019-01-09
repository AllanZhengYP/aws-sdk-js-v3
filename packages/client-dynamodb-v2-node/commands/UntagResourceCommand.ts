import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {UntagResource} from '../model/UntagResource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UntagResourceInput} from '../types/UntagResourceInput';
import {UntagResourceOutput} from '../types/UntagResourceOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class UntagResourceCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    UntagResourceInput,
    OutputTypesUnion,
    UntagResourceOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        UntagResourceInput,
        UntagResourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: UntagResourceInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<UntagResourceInput, UntagResourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UntagResource
        };

        return stack.resolve(
            handler<UntagResourceInput, UntagResourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}