import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>An array of target objects is required. It cannot be empty or null.</p>
 */
export interface TargetsRequiredException extends __ServiceException__<_TargetsRequiredExceptionDetails> {
    name: 'TargetsRequiredException';
}

export interface _TargetsRequiredExceptionDetails {

}