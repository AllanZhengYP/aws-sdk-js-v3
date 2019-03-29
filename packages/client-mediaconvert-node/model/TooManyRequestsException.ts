import {Structure as _Structure_} from '@aws-sdk/types';

export const TooManyRequestsException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Message: {
            shape: {
                type: 'string',
            },
            locationName: 'message',
        },
    },
    exceptionType: 'TooManyRequestsException',
};