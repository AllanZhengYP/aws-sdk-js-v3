import {_UnmarshalledComment} from './_Comment';
import * as __aws_sdk_types from '@aws-js-sdk-v3-prerelease/types';

/**
 * DeleteCommentContentOutput shape
 */
export interface DeleteCommentContentOutput {
    /**
     * <p>Information about the comment you just deleted.</p>
     */
    comment?: _UnmarshalledComment;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
