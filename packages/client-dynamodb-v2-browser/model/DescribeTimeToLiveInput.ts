import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DescribeTimeToLiveInput: _Structure_ = {
    type: 'structure',
    required: [
        'TableName',
    ],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
    },
};