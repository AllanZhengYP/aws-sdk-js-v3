import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>You have exceeded your maximum total code size per account. <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a> </p>
 */
export interface CodeStorageExceededException extends __ServiceException__<_CodeStorageExceededExceptionDetails> {
    name: 'CodeStorageExceededException';
}

export interface _CodeStorageExceededExceptionDetails {
    /**
     * <p>The exception type.</p>
     */
    Type?: string;

    /**
     * _String shape
     */
    message?: string;
}