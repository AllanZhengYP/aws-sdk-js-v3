import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>A branch name is required but was not specified.</p>
 */
export interface BranchNameRequiredException extends __ServiceException__<_BranchNameRequiredExceptionDetails> {
    name: 'BranchNameRequiredException';
}

export interface _BranchNameRequiredExceptionDetails {

}