import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>Thrown when a request is throttled.</p>
 */
export interface TooManyRequestsException extends __ServiceException__<_TooManyRequestsExceptionDetails> {
    name: 'TooManyRequestsException';
}

export interface _TooManyRequestsExceptionDetails {
    /**
     * <p>Message returned by a TooManyRequestsException</p>
     */
    message?: string;
}