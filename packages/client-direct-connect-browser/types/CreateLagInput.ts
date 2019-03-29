import {BrowserHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * CreateLagInput shape
 */
export interface CreateLagInput {
    /**
     * <p>The number of physical connections initially provisioned and bundled by the LAG.</p>
     */
    numberOfConnections: number;

    /**
     * <p>The location for the LAG.</p>
     */
    location: string;

    /**
     * <p>The bandwidth of the individual physical connections bundled by the LAG. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. </p>
     */
    connectionsBandwidth: string;

    /**
     * <p>The name of the LAG.</p>
     */
    lagName: string;

    /**
     * <p>The ID of an existing connection to migrate to the LAG.</p>
     */
    connectionId?: string;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_sdk_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}