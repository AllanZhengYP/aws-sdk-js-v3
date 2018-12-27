import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * RuleLimitExceededException shape
 */
export interface RuleLimitExceededException extends __ServiceException__<_RuleLimitExceededExceptionDetails> {
    name: 'RuleLimitExceededException';
}

export interface _RuleLimitExceededExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    Message?: string;
}