import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DescribeStreamInput: _Structure_ = {
    type: 'structure',
    required: [
        'StreamName',
    ],
    members: {
        StreamName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        ExclusiveStartShardId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};