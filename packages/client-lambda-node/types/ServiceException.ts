import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The AWS Lambda service encountered an internal error.</p>
 */
export interface ServiceException extends __ServiceException__<_ServiceExceptionDetails> {
    name: 'ServiceException';
}

export interface _ServiceExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;
}