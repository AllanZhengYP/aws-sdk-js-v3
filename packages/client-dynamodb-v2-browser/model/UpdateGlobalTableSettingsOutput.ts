import {_ReplicaSettingsDescriptionList} from './_ReplicaSettingsDescriptionList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const UpdateGlobalTableSettingsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        GlobalTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        ReplicaSettings: {
            shape: _ReplicaSettingsDescriptionList,
        },
    },
};