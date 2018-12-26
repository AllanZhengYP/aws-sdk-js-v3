import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The source branch and the destination branch for the pull request are the same. You must specify different branches for the source and destination.</p>
 */
export interface SourceAndDestinationAreSameException extends __ServiceException__<_SourceAndDestinationAreSameExceptionDetails> {
    name: 'SourceAndDestinationAreSameException';
}

export interface _SourceAndDestinationAreSameExceptionDetails {

}