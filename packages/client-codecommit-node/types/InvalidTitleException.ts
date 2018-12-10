import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.</p>
 */
export interface InvalidTitleException extends __ServiceException__<_InvalidTitleExceptionDetails> {
    name: 'InvalidTitleException';
}

export interface _InvalidTitleExceptionDetails {

}