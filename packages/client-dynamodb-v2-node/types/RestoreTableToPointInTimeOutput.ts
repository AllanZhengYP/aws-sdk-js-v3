import {_UnmarshalledTableDescription} from './_TableDescription';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * RestoreTableToPointInTimeOutput shape
 */
export interface RestoreTableToPointInTimeOutput {
    /**
     * <p>Represents the properties of a table.</p>
     */
    TableDescription?: _UnmarshalledTableDescription;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_js_sdk_v3_prerelease_types.ResponseMetadata;
}
