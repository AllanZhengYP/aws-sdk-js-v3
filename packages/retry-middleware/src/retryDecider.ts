import { RETRYABLE_STATUS_CODES } from './constants';
import {
    isClockSkewError,
    isStillProcessingError,
    isThrottlingError,
} from '@aws-js-sdk-v3-prerelease/service-error-classification';
import {
    MetadataBearer,
    SdkError,
    RetryDecider
} from '@aws-js-sdk-v3-prerelease/types';

export function defaultRetryDecider(
    retryClockSkewErrors = false
): RetryDecider {
    return (error: SdkError) => {
        if (!error) {
            return false;
        }

        if (error.connectionError) {
            return true;
        }

        if (
            hasMetadata(error) &&
            error.$metadata.httpStatusCode &&
            RETRYABLE_STATUS_CODES.has(error.$metadata.httpStatusCode)
        ) {
            return true;
        }

        return isStillProcessingError(error)
            || isThrottlingError(error)
            || (retryClockSkewErrors && isClockSkewError(error));
    }
}

function hasMetadata(error: any): error is MetadataBearer {
    return error && error.$metadata;
}
