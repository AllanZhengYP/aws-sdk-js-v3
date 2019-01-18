import {_AutoScalingSettingsUpdate} from './_AutoScalingSettingsUpdate';
import {_ReplicaGlobalSecondaryIndexSettingsUpdateList} from './_ReplicaGlobalSecondaryIndexSettingsUpdateList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ReplicaSettingsUpdate as _ReplicaSettingsUpdate_Type} from '../types/_ReplicaSettingsUpdate';

export const _ReplicaSettingsUpdate: _StructureModel_<_ReplicaSettingsUpdate_Type, any> = {
    parse: (data: any): _ReplicaSettingsUpdate_Type => {
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;
    if (data.ReplicaProvisionedReadCapacityUnits) rtn.ReplicaProvisionedReadCapacityUnits = data.ReplicaProvisionedReadCapacityUnits;
    if (data.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate) rtn.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate = _AutoScalingSettingsUpdate.parse!(data.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate);
    if (data.ReplicaGlobalSecondaryIndexSettingsUpdate) rtn.ReplicaGlobalSecondaryIndexSettingsUpdate = _ReplicaGlobalSecondaryIndexSettingsUpdateList.parse!(data.ReplicaGlobalSecondaryIndexSettingsUpdate);
        return rtn as _ReplicaSettingsUpdate_Type;
    },
    serialize: (data: _ReplicaSettingsUpdate_Type): any => {
    		if (!data.RegionName) {
        throw new Error('_ReplicaSettingsUpdate has missing required parameter');
    }
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;

    if (data.ReplicaProvisionedReadCapacityUnits) rtn.ReplicaProvisionedReadCapacityUnits = data.ReplicaProvisionedReadCapacityUnits;

    if (data.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate) rtn.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate = _AutoScalingSettingsUpdate.serialize!(data.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate as any);

    if (data.ReplicaGlobalSecondaryIndexSettingsUpdate) rtn.ReplicaGlobalSecondaryIndexSettingsUpdate = _ReplicaGlobalSecondaryIndexSettingsUpdateList.serialize!(data.ReplicaGlobalSecondaryIndexSettingsUpdate as any);

        return rtn;
    },
};