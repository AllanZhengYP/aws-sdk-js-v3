import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _StartingPosition: _Structure_ = {
    type: 'structure',
    required: [
        'Type',
    ],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
        },
        SequenceNumber: {
            shape: {
                type: 'string',
            },
        },
        Timestamp: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};