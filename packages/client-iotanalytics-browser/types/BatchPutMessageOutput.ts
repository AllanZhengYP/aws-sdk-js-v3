import {_UnmarshalledBatchPutMessageErrorEntry} from './_BatchPutMessageErrorEntry';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * BatchPutMessageOutput shape
 */
export interface BatchPutMessageOutput {
    /**
     * <p>A list of any errors encountered when sending the messages to the channel.</p>
     */
    batchPutMessageErrorEntries?: Array<_UnmarshalledBatchPutMessageErrorEntry>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
