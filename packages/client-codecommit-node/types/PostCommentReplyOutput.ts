import {_UnmarshalledComment} from './_Comment';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * PostCommentReplyOutput shape
 */
export interface PostCommentReplyOutput {
    /**
     * <p>Information about the reply to a comment.</p>
     */
    comment?: _UnmarshalledComment;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
