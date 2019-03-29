import {_UnmarshalledPolicy} from './_Policy';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * PutPolicyOutput shape
 */
export interface PutPolicyOutput {
    /**
     * <p>The details of the AWS Firewall Manager policy that was created.</p>
     */
    Policy?: _UnmarshalledPolicy;

    /**
     * <p>The Amazon Resource Name (ARN) of the policy that was created.</p>
     */
    PolicyArn?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
