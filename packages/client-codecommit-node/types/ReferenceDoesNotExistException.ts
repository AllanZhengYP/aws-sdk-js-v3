import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The specified reference does not exist. You must provide a full commit ID.</p>
 */
export interface ReferenceDoesNotExistException extends __ServiceException__<_ReferenceDoesNotExistExceptionDetails> {
    name: 'ReferenceDoesNotExistException';
}

export interface _ReferenceDoesNotExistExceptionDetails {

}