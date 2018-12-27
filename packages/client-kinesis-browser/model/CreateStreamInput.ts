import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const CreateStreamInput: _Structure_ = {
    type: 'structure',
    required: [
        'StreamName',
        'ShardCount',
    ],
    members: {
        StreamName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ShardCount: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};