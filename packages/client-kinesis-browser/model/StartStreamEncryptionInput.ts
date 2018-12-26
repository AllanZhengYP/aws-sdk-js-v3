import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const StartStreamEncryptionInput: _Structure_ = {
    type: 'structure',
    required: [
        'StreamName',
        'EncryptionType',
        'KeyId',
    ],
    members: {
        StreamName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        EncryptionType: {
            shape: {
                type: 'string',
            },
        },
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};