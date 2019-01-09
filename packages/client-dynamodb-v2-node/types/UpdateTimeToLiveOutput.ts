import {_UnmarshalledTimeToLiveSpecification} from './_TimeToLiveSpecification';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * UpdateTimeToLiveOutput shape
 */
export interface UpdateTimeToLiveOutput {
    /**
     * <p>Represents the output of an <code>UpdateTimeToLive</code> operation.</p>
     */
    TimeToLiveSpecification?: _UnmarshalledTimeToLiveSpecification;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_js_sdk_v3_prerelease_types.ResponseMetadata;
}
