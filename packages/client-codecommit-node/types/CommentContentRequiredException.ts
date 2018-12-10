import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
 */
export interface CommentContentRequiredException extends __ServiceException__<_CommentContentRequiredExceptionDetails> {
    name: 'CommentContentRequiredException';
}

export interface _CommentContentRequiredExceptionDetails {

}