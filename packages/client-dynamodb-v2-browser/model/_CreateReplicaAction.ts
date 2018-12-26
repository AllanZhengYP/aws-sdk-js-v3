import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _CreateReplicaAction: _Structure_ = {
    type: 'structure',
    required: [
        'RegionName',
    ],
    members: {
        RegionName: {
            shape: {
                type: 'string',
            },
        },
    },
};