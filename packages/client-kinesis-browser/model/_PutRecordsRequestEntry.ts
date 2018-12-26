import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _PutRecordsRequestEntry: _Structure_ = {
    type: 'structure',
    required: [
        'Data',
        'PartitionKey',
    ],
    members: {
        Data: {
            shape: {
                type: 'blob',
            },
        },
        ExplicitHashKey: {
            shape: {
                type: 'string',
            },
        },
        PartitionKey: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};