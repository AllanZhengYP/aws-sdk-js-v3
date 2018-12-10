import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _FaultStatistics: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
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