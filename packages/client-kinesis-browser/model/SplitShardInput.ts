import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const SplitShardInput: _Structure_ = {
    type: 'structure',
    required: [
        'StreamName',
        'ShardToSplit',
        'NewStartingHashKey',
    ],
    members: {
        StreamName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ShardToSplit: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        NewStartingHashKey: {
            shape: {
                type: 'string',
            },
        },
    },
};