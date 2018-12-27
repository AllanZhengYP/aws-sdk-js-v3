import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DeregisterStreamConsumerInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        StreamARN: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
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
    },
};