import {_UnmarshalledEndpoint} from './_Endpoint';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * DescribeEndpointsOutput shape
 */
export interface DescribeEndpointsOutput {
    /**
     * _Endpoints shape
     */
    Endpoints: Array<_UnmarshalledEndpoint>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_js_sdk_v3_prerelease_types.ResponseMetadata;
}
