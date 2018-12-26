import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _Consumer: _Structure_ = {
    type: 'structure',
    required: [
        'ConsumerName',
        'ConsumerARN',
        'ConsumerStatus',
        'ConsumerCreationTimestamp',
    ],
    members: {
        ConsumerName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ConsumerARN: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ConsumerStatus: {
            shape: {
                type: 'string',
            },
        },
        ConsumerCreationTimestamp: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};