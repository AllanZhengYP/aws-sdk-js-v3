import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _PointInTimeRecoverySpecification: _Structure_ = {
    type: 'structure',
    required: [
        'PointInTimeRecoveryEnabled',
    ],
    members: {
        PointInTimeRecoveryEnabled: {
            shape: {
                type: 'boolean',
            },
        },
    },
};