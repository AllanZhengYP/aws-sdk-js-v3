import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _EnvironmentError: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ErrorCode: {
            shape: {
                type: 'string',
            },
        },
        Message: {
            shape: {
                type: 'string',
                sensitive: true,
            },
        },
    },
};