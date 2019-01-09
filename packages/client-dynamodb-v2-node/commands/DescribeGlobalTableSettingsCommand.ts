import * as __aws_js_sdk_v3_prerelease_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';
import * as _stream from 'stream';
import {DescribeGlobalTableSettings} from '../model/DescribeGlobalTableSettings';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeGlobalTableSettingsInput} from '../types/DescribeGlobalTableSettingsInput';
import {DescribeGlobalTableSettingsOutput} from '../types/DescribeGlobalTableSettingsOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class DescribeGlobalTableSettingsCommand implements __aws_js_sdk_v3_prerelease_types.Command<
    InputTypesUnion,
    DescribeGlobalTableSettingsInput,
    OutputTypesUnion,
    DescribeGlobalTableSettingsOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<
        DescribeGlobalTableSettingsInput,
        DescribeGlobalTableSettingsOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeGlobalTableSettingsInput) {}

    resolveMiddleware(
        clientStack: __aws_js_sdk_v3_prerelease_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_js_sdk_v3_prerelease_types.Handler<DescribeGlobalTableSettingsInput, DescribeGlobalTableSettingsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_js_sdk_v3_prerelease_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeGlobalTableSettings
        };

        return stack.resolve(
            handler<DescribeGlobalTableSettingsInput, DescribeGlobalTableSettingsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}