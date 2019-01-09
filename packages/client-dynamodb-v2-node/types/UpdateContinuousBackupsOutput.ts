import {_UnmarshalledContinuousBackupsDescription} from './_ContinuousBackupsDescription';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * UpdateContinuousBackupsOutput shape
 */
export interface UpdateContinuousBackupsOutput {
    /**
     * <p>Represents the continuous backups and point in time recovery settings on the table.</p>
     */
    ContinuousBackupsDescription?: _UnmarshalledContinuousBackupsDescription;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_js_sdk_v3_prerelease_types.ResponseMetadata;
}
