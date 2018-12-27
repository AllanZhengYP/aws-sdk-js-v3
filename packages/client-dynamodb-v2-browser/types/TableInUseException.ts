import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>A target table with the specified name is either being created or deleted. </p>
 */
export interface TableInUseException extends __ServiceException__<_TableInUseExceptionDetails> {
    name: 'TableInUseException';
}

export interface _TableInUseExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}