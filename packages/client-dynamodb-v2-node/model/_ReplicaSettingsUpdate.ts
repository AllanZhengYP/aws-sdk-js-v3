import {_AutoScalingSettingsUpdate} from './_AutoScalingSettingsUpdate';
import {_ReplicaGlobalSecondaryIndexSettingsUpdateList} from './_ReplicaGlobalSecondaryIndexSettingsUpdateList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _ReplicaSettingsUpdate: _Structure_ = {
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
        ReplicaProvisionedReadCapacityUnits: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: {
            shape: _AutoScalingSettingsUpdate,
        },
        ReplicaGlobalSecondaryIndexSettingsUpdate: {
            shape: _ReplicaGlobalSecondaryIndexSettingsUpdateList,
        },
    },
};