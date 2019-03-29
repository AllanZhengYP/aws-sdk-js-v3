import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * StartPipelineReprocessingOutput shape
 */
export interface StartPipelineReprocessingOutput {
    /**
     * <p>The ID of the pipeline reprocessing activity that was started.</p>
     */
    reprocessingId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
