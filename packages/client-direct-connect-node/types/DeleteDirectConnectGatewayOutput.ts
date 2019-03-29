import {_UnmarshalledDirectConnectGateway} from './_DirectConnectGateway';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * DeleteDirectConnectGatewayOutput shape
 */
export interface DeleteDirectConnectGatewayOutput {
    /**
     * <p>The Direct Connect gateway.</p>
     */
    directConnectGateway?: _UnmarshalledDirectConnectGateway;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
