import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>An invalid restore time was specified. RestoreDateTime must be between EarliestRestorableDateTime and LatestRestorableDateTime.</p>
 */
export interface InvalidRestoreTimeException extends __ServiceException__<_InvalidRestoreTimeExceptionDetails> {
    name: 'InvalidRestoreTimeException';
}

export interface _InvalidRestoreTimeExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}