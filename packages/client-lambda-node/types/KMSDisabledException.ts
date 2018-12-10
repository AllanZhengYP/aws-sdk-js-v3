import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.</p>
 */
export interface KMSDisabledException extends __ServiceException__<_KMSDisabledExceptionDetails> {
    name: 'KMSDisabledException';
}

export interface _KMSDisabledExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;
}