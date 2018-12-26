import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>An error occurred on the server side.</p>
 */
export interface InternalServerError extends __ServiceException__<_InternalServerErrorDetails> {
    name: 'InternalServerError';
}

export interface _InternalServerErrorDetails {
    /**
     * <p>The server encountered an internal error trying to fulfill the request.</p>
     */
    message?: string;
}