import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>Thrown for missing or bad input parameter(s).</p>
 */
export interface InvalidParameterException extends __ServiceException__<_InvalidParameterExceptionDetails> {
    name: 'InvalidParameterException';
}

export interface _InvalidParameterExceptionDetails {
    /**
     * <p>The message returned by an InvalidParameterException.</p>
     */
    message?: string;
}