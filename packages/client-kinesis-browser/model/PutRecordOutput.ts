import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const PutRecordOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ShardId',
        'SequenceNumber',
    ],
    members: {
        ShardId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        SequenceNumber: {
            shape: {
                type: 'string',
            },
        },
        EncryptionType: {
            shape: {
                type: 'string',
            },
        },
    },
};