import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The specified global table does not exist.</p>
 */
export interface GlobalTableNotFoundException extends __ServiceException__<_GlobalTableNotFoundExceptionDetails> {
    name: 'GlobalTableNotFoundException';
}

export interface _GlobalTableNotFoundExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}