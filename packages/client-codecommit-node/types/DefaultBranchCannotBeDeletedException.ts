import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
 */
export interface DefaultBranchCannotBeDeletedException extends __ServiceException__<_DefaultBranchCannotBeDeletedExceptionDetails> {
    name: 'DefaultBranchCannotBeDeletedException';
}

export interface _DefaultBranchCannotBeDeletedExceptionDetails {

}