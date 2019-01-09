import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {DescribeContinuousBackups} from '../model/DescribeContinuousBackups';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeContinuousBackupsInput} from '../types/DescribeContinuousBackupsInput';
import {DescribeContinuousBackupsOutput} from '../types/DescribeContinuousBackupsOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class DescribeContinuousBackupsCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    DescribeContinuousBackupsInput,
    OutputTypesUnion,
    DescribeContinuousBackupsOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        DescribeContinuousBackupsInput,
        DescribeContinuousBackupsOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeContinuousBackupsInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<DescribeContinuousBackupsInput, DescribeContinuousBackupsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeContinuousBackups
        };

        return stack.resolve(
            handler<DescribeContinuousBackupsInput, DescribeContinuousBackupsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}