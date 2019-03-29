import {_UnmarshalledJobTemplate} from './_JobTemplate';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * UpdateJobTemplateOutput shape
 */
export interface UpdateJobTemplateOutput {
    /**
     * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
     */
    JobTemplate?: _UnmarshalledJobTemplate;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
