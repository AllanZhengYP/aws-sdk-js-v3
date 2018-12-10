import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The specified global table already exists.</p>
 */
export interface GlobalTableAlreadyExistsException extends __ServiceException__<_GlobalTableAlreadyExistsExceptionDetails> {
    name: 'GlobalTableAlreadyExistsException';
}

export interface _GlobalTableAlreadyExistsExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}