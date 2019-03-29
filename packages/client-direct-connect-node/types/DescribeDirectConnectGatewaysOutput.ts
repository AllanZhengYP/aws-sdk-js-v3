import {_UnmarshalledDirectConnectGateway} from './_DirectConnectGateway';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * DescribeDirectConnectGatewaysOutput shape
 */
export interface DescribeDirectConnectGatewaysOutput {
    /**
     * <p>The Direct Connect gateways.</p>
     */
    directConnectGateways?: Array<_UnmarshalledDirectConnectGateway>;

    /**
     * <p>The token to retrieve the next page.</p>
     */
    nextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
