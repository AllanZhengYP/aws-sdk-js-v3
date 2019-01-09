import {_UnmarshalledTableDescription} from './_TableDescription';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>Represents the output of a <code>DescribeTable</code> operation.</p>
 */
export interface DescribeTableOutput {
    /**
     * <p>The properties of the table.</p>
     */
    Table?: _UnmarshalledTableDescription;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_js_sdk_v3_prerelease_types.ResponseMetadata;
}
