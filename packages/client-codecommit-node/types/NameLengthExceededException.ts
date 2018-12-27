import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The user name is not valid because it has exceeded the character limit for file names. File names, including the path to the file, cannot exceed the character limit. </p>
 */
export interface NameLengthExceededException extends __ServiceException__<_NameLengthExceededExceptionDetails> {
    name: 'NameLengthExceededException';
}

export interface _NameLengthExceededExceptionDetails {

}