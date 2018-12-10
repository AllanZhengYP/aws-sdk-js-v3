import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {UntagResource} from '../model/UntagResource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UntagResourceInput} from '../types/UntagResourceInput';
import {UntagResourceOutput} from '../types/UntagResourceOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';

export class UntagResourceCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UntagResourceInput,
    OutputTypesUnion,
    UntagResourceOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UntagResourceInput,
        UntagResourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: UntagResourceInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<UntagResourceInput, UntagResourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UntagResource
        };

        return stack.resolve(
            handler<UntagResourceInput, UntagResourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}