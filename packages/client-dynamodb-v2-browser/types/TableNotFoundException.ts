import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>A source table with the name <code>TableName</code> does not currently exist within the subscriber's account.</p>
 */
export interface TableNotFoundException extends __ServiceException__<_TableNotFoundExceptionDetails> {
    name: 'TableNotFoundException';
}

export interface _TableNotFoundExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}