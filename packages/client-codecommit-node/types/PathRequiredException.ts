import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The folderPath for a location cannot be null.</p>
 */
export interface PathRequiredException extends __ServiceException__<_PathRequiredExceptionDetails> {
    name: 'PathRequiredException';
}

export interface _PathRequiredExceptionDetails {

}