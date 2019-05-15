import { _UnmarshalledGCMChannelResponse } from "./_GCMChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateGcmChannelOutput shape
 */
export interface UpdateGcmChannelOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Google Cloud Messaging channel definition
   */
  GCMChannelResponse: _UnmarshalledGCMChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
