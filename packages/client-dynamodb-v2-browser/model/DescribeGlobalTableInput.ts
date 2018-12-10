import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DescribeGlobalTableInput: _Structure_ = {
    type: 'structure',
    required: [
        'GlobalTableName',
    ],
    members: {
        GlobalTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
    },
};