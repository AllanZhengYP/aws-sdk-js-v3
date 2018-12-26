import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _AccountUsage: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TotalCodeSize: {
            shape: {
                type: 'integer',
            },
        },
        FunctionCount: {
            shape: {
                type: 'integer',
            },
        },
    },
};