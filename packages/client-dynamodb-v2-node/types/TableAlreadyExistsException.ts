import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>A target table with the specified name already exists. </p>
 */
export interface TableAlreadyExistsException extends __ServiceException__<_TableAlreadyExistsExceptionDetails> {
    name: 'TableAlreadyExistsException';
}

export interface _TableAlreadyExistsExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}