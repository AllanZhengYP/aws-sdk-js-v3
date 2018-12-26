import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
 */
export interface InvalidPullRequestStatusException extends __ServiceException__<_InvalidPullRequestStatusExceptionDetails> {
    name: 'InvalidPullRequestStatusException';
}

export interface _InvalidPullRequestStatusExceptionDetails {

}