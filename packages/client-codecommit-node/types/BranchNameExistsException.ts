import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The specified branch name already exists.</p>
 */
export interface BranchNameExistsException extends __ServiceException__<_BranchNameExistsExceptionDetails> {
    name: 'BranchNameExistsException';
}

export interface _BranchNameExistsExceptionDetails {

}