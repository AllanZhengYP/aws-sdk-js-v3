import {ServiceException as __ServiceException__} from '@aws-js-sdk-v3-prerelease/types';

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
 */
export interface ActorDoesNotExistException extends __ServiceException__<_ActorDoesNotExistExceptionDetails> {
    name: 'ActorDoesNotExistException';
}

export interface _ActorDoesNotExistExceptionDetails {

}