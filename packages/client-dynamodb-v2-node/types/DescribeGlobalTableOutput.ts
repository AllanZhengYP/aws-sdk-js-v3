import {_UnmarshalledGlobalTableDescription} from './_GlobalTableDescription';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * DescribeGlobalTableOutput shape
 */
export interface DescribeGlobalTableOutput {
    /**
     * <p>Contains the details of the global table.</p>
     */
    GlobalTableDescription?: _UnmarshalledGlobalTableDescription;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_js_sdk_v3_prerelease_types.ResponseMetadata;
}
