import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const IncreaseStreamRetentionPeriodInput: _Structure_ = {
    type: 'structure',
    required: [
        'StreamName',
        'RetentionPeriodHours',
    ],
    members: {
        StreamName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        RetentionPeriodHours: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};