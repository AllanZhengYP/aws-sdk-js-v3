import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>Backup not found for the given BackupARN. </p>
 */
export interface BackupNotFoundException extends __ServiceException__<_BackupNotFoundExceptionDetails> {
    name: 'BackupNotFoundException';
}

export interface _BackupNotFoundExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}