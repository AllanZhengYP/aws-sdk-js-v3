import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * ThrottledException shape
 */
export interface ThrottledException extends __ServiceException__<_ThrottledExceptionDetails> {
    name: 'ThrottledException';
}

export interface _ThrottledExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    Message?: string;
}