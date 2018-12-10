import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ThrottledException: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Message: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'ThrottledException',
};