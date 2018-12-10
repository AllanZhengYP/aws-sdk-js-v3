import {_UnmarshalledEncryptionConfig} from './_EncryptionConfig';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * PutEncryptionConfigOutput shape
 */
export interface PutEncryptionConfigOutput {
    /**
     * _EncryptionConfig shape
     */
    EncryptionConfig?: _UnmarshalledEncryptionConfig;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
