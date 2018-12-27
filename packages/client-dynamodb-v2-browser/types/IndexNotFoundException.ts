import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The operation tried to access a nonexistent index.</p>
 */
export interface IndexNotFoundException extends __ServiceException__<_IndexNotFoundExceptionDetails> {
    name: 'IndexNotFoundException';
}

export interface _IndexNotFoundExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}