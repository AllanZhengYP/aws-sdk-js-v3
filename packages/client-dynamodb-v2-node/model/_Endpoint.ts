import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _Endpoint: _Structure_ = {
    type: 'structure',
    required: [
        'Address',
        'CachePeriodInMinutes',
    ],
    members: {
        Address: {
            shape: {
                type: 'string',
            },
        },
        CachePeriodInMinutes: {
            shape: {
                type: 'integer',
            },
        },
    },
};