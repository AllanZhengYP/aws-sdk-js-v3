import {_AutoScalingSettingsUpdate} from './_AutoScalingSettingsUpdate';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ReplicaGlobalSecondaryIndexSettingsUpdate as _ReplicaGlobalSecondaryIndexSettingsUpdate_Type} from '../types/_ReplicaGlobalSecondaryIndexSettingsUpdate';

export const _ReplicaGlobalSecondaryIndexSettingsUpdate: _StructureModel_<_ReplicaGlobalSecondaryIndexSettingsUpdate_Type, any> = {
    parse: (data: any): _ReplicaGlobalSecondaryIndexSettingsUpdate_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
    if (data.ProvisionedReadCapacityUnits) rtn.ProvisionedReadCapacityUnits = data.ProvisionedReadCapacityUnits;
    if (data.ProvisionedReadCapacityAutoScalingSettingsUpdate) rtn.ProvisionedReadCapacityAutoScalingSettingsUpdate = _AutoScalingSettingsUpdate.parse!(data.ProvisionedReadCapacityAutoScalingSettingsUpdate);
        return rtn as _ReplicaGlobalSecondaryIndexSettingsUpdate_Type;
    },
    serialize: (data: _ReplicaGlobalSecondaryIndexSettingsUpdate_Type): any => {
    		if (!data.IndexName) {
        throw new Error('_ReplicaGlobalSecondaryIndexSettingsUpdate has missing required parameter');
    }
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.ProvisionedReadCapacityUnits) rtn.ProvisionedReadCapacityUnits = data.ProvisionedReadCapacityUnits;

    if (data.ProvisionedReadCapacityAutoScalingSettingsUpdate) rtn.ProvisionedReadCapacityAutoScalingSettingsUpdate = _AutoScalingSettingsUpdate.serialize!(data.ProvisionedReadCapacityAutoScalingSettingsUpdate as any);

        return rtn;
    },
};