import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>You cannot modify or delete this comment. Only comment authors can modify or delete their comments.</p>
 */
export interface CommentNotCreatedByCallerException extends __ServiceException__<_CommentNotCreatedByCallerExceptionDetails> {
    name: 'CommentNotCreatedByCallerException';
}

export interface _CommentNotCreatedByCallerExceptionDetails {

}