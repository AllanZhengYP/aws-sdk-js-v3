import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _ProvisionedThroughput: _Structure_ = {
    type: 'structure',
    required: [
        'ReadCapacityUnits',
        'WriteCapacityUnits',
    ],
    members: {
        ReadCapacityUnits: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        WriteCapacityUnits: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};