import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
 */
export interface BeforeCommitIdAndAfterCommitIdAreSameException extends __ServiceException__<_BeforeCommitIdAndAfterCommitIdAreSameExceptionDetails> {
    name: 'BeforeCommitIdAndAfterCommitIdAreSameException';
}

export interface _BeforeCommitIdAndAfterCommitIdAreSameExceptionDetails {

}