import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The comment ID is missing or null. A comment ID is required.</p>
 */
export interface CommentIdRequiredException extends __ServiceException__<_CommentIdRequiredExceptionDetails> {
    name: 'CommentIdRequiredException';
}

export interface _CommentIdRequiredExceptionDetails {

}