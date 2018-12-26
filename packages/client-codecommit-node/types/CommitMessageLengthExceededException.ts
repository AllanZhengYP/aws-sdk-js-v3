import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The commit message is too long. Provide a shorter string. </p>
 */
export interface CommitMessageLengthExceededException extends __ServiceException__<_CommitMessageLengthExceededExceptionDetails> {
    name: 'CommitMessageLengthExceededException';
}

export interface _CommitMessageLengthExceededExceptionDetails {

}