import * as __aws_sdk_config_resolver from '@aws-js-sdk-v3-prerelease/config-resolver';
import * as __aws_sdk_core_handler from '@aws-js-sdk-v3-prerelease/core-handler';
import * as __aws_sdk_credential_provider_node from '@aws-js-sdk-v3-prerelease/credential-provider-node';
import * as __aws_sdk_hash_node from '@aws-js-sdk-v3-prerelease/hash-node';
import * as __aws_sdk_json_builder from '@aws-js-sdk-v3-prerelease/json-builder';
import * as __aws_sdk_json_error_unmarshaller from '@aws-js-sdk-v3-prerelease/json-error-unmarshaller';
import * as __aws_sdk_json_parser from '@aws-js-sdk-v3-prerelease/json-parser';
import * as __aws_sdk_middleware_content_length from '@aws-js-sdk-v3-prerelease/middleware-content-length';
import * as __aws_sdk_middleware_serializer from '@aws-js-sdk-v3-prerelease/middleware-serializer';
import * as __aws_sdk_middleware_stack from '@aws-js-sdk-v3-prerelease/middleware-stack';
import * as __aws_sdk_node_http_handler from '@aws-js-sdk-v3-prerelease/node-http-handler';
import * as __aws_sdk_protocol_rest from '@aws-js-sdk-v3-prerelease/protocol-rest';
import * as __aws_sdk_region_provider from '@aws-js-sdk-v3-prerelease/region-provider';
import * as __aws_sdk_retry_middleware from '@aws-js-sdk-v3-prerelease/retry-middleware';
import * as __aws_sdk_signature_v4 from '@aws-js-sdk-v3-prerelease/signature-v4';
import * as __aws_sdk_signing_middleware from '@aws-js-sdk-v3-prerelease/signing-middleware';
import * as __aws_sdk_stream_collector_node from '@aws-js-sdk-v3-prerelease/stream-collector-node';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';
import * as __aws_sdk_url_parser_node from '@aws-js-sdk-v3-prerelease/url-parser-node';
import * as __aws_sdk_util_base64_node from '@aws-js-sdk-v3-prerelease/util-base64-node';
import * as __aws_sdk_util_body_length_node from '@aws-js-sdk-v3-prerelease/util-body-length-node';
import * as __aws_sdk_util_utf8_node from '@aws-js-sdk-v3-prerelease/util-utf8-node';
import * as _stream from 'stream';
import {XRayConfiguration, XRayResolvedConfiguration, configurationProperties} from './XRayConfiguration';
import {InputTypesUnion} from './types/InputTypesUnion';
import {OutputTypesUnion} from './types/OutputTypesUnion';

export class XRayClient {
    protected readonly config: XRayResolvedConfiguration;

    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        InputTypesUnion,
        OutputTypesUnion,
        _stream.Readable
    >();

    constructor(configuration: XRayConfiguration) {
        this.config = __aws_sdk_config_resolver.resolveConfiguration(
            configuration,
            configurationProperties,
            this.middlewareStack
        );
        this.middlewareStack.add(
            __aws_sdk_middleware_serializer.serializerMiddleware(this.config.serializer),
            {
                step: 'serialize',
                priority: 90,
                tags: {SERIALIZER: true}
            }
        );
        this.middlewareStack.add(
            __aws_sdk_middleware_content_length.contentLengthMiddleware(
                this.config.bodyLengthChecker
            ),
            {
                step: 'build',
                priority: -80,
                tags: {SET_CONTENT_LENGTH: true}
            }
        );
        if (this.config.maxRetries > 0) {
            this.middlewareStack.add(
                __aws_sdk_retry_middleware.retryMiddleware(
                    this.config.maxRetries,
                    this.config.retryDecider,
                    this.config.delayDecider
                ),
                {
                    step: 'finalize',
                    priority: Infinity,
                    tags: {RETRY: true}
                }
            );
        }
        this.middlewareStack.add(
            __aws_sdk_signing_middleware.signingMiddleware<InputTypesUnion, OutputTypesUnion, _stream.Readable>(this.config.signer),
            {
                step: 'finalize',
                priority: 0,
                tags: {SIGNATURE: true}
            }
        );
    }

    destroy(): void {
        if (!this.config._user_injected_http_handler) {
            this.config.httpHandler.destroy();
        }
    }

    /**
     * This will need to be revised when the command interface lands.
     */
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(command: __aws_sdk_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, XRayResolvedConfiguration, _stream.Readable>): Promise<OutputType>;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: __aws_sdk_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, XRayResolvedConfiguration, _stream.Readable>,
        cb: (err: any, data?: OutputType) => void
    ): void;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: __aws_sdk_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, XRayResolvedConfiguration, _stream.Readable>,
        cb?: (err: any, data?: OutputType) => void
    ): Promise<OutputType>|void {
        const handler = command.resolveMiddleware(
            this.middlewareStack,
            this.config
        );
        if (cb) {
            handler(command).then(
                (result: OutputType)  => cb(null, result),
                (err: any) => cb(err)
            ).catch(
                // prevent any errors thrown in the callback from triggering an
                // unhandled promise rejection
                () => {}
            );
        } else {
            return handler(command);
        }
    }
}
