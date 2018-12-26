import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const RegisterStreamConsumerInput: _Structure_ = {
    type: 'structure',
    required: [
        'StreamARN',
        'ConsumerName',
    ],
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
    },
};