import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _EncryptionConfig: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        KeyId: {
            shape: {
                type: 'string',
            },
        },
        Status: {
            shape: {
                type: 'string',
            },
        },
        Type: {
            shape: {
                type: 'string',
            },
        },
    },
};