import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The provided iterator exceeds the maximum age allowed.</p>
 */
export interface ExpiredIteratorException extends __ServiceException__<_ExpiredIteratorExceptionDetails> {
    name: 'ExpiredIteratorException';
}

export interface _ExpiredIteratorExceptionDetails {
    /**
     * <p>A message that provides information about the error.</p>
     */
    message?: string;
}