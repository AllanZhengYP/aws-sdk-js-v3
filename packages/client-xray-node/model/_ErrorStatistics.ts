import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _ErrorStatistics: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ThrottleCount: {
            shape: {
                type: 'integer',
            },
        },
        OtherCount: {
            shape: {
                type: 'integer',
            },
        },
        TotalCount: {
            shape: {
                type: 'integer',
            },
        },
    },
};