import {_UnmarshalledGlobalTable} from './_GlobalTable';
import * as __aws_js_sdk_v3_prerelease_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * ListGlobalTablesOutput shape
 */
export interface ListGlobalTablesOutput {
    /**
     * <p>List of global table names.</p>
     */
    GlobalTables?: Array<_UnmarshalledGlobalTable>;

    /**
     * <p>Last evaluated global table name.</p>
     */
    LastEvaluatedGlobalTableName?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_js_sdk_v3_prerelease_types.ResponseMetadata;
}
