import {_AutoScalingSettingsDescription} from './_AutoScalingSettingsDescription';
import {_ReplicaGlobalSecondaryIndexSettingsDescriptionList} from './_ReplicaGlobalSecondaryIndexSettingsDescriptionList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ReplicaSettingsDescription as _ReplicaSettingsDescription_Type} from '../types/_ReplicaSettingsDescription';

export const _ReplicaSettingsDescription: _StructureModel_<_ReplicaSettingsDescription_Type, any> = {
    parse: (data: any): _ReplicaSettingsDescription_Type => {
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;
    if (data.ReplicaStatus) rtn.ReplicaStatus = data.ReplicaStatus;
    if (data.ReplicaProvisionedReadCapacityUnits) rtn.ReplicaProvisionedReadCapacityUnits = data.ReplicaProvisionedReadCapacityUnits;
    if (data.ReplicaProvisionedReadCapacityAutoScalingSettings) rtn.ReplicaProvisionedReadCapacityAutoScalingSettings = _AutoScalingSettingsDescription.parse!(data.ReplicaProvisionedReadCapacityAutoScalingSettings);
    if (data.ReplicaProvisionedWriteCapacityUnits) rtn.ReplicaProvisionedWriteCapacityUnits = data.ReplicaProvisionedWriteCapacityUnits;
    if (data.ReplicaProvisionedWriteCapacityAutoScalingSettings) rtn.ReplicaProvisionedWriteCapacityAutoScalingSettings = _AutoScalingSettingsDescription.parse!(data.ReplicaProvisionedWriteCapacityAutoScalingSettings);
    if (data.ReplicaGlobalSecondaryIndexSettings) rtn.ReplicaGlobalSecondaryIndexSettings = _ReplicaGlobalSecondaryIndexSettingsDescriptionList.parse!(data.ReplicaGlobalSecondaryIndexSettings);
        return rtn as _ReplicaSettingsDescription_Type;
    },
    serialize: (data: _ReplicaSettingsDescription_Type): any => {
    		if (!data.RegionName) {
        throw new Error('_ReplicaSettingsDescription has missing required parameter');
    }
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;

    if (data.ReplicaStatus) rtn.ReplicaStatus = data.ReplicaStatus;

    if (data.ReplicaProvisionedReadCapacityUnits) rtn.ReplicaProvisionedReadCapacityUnits = data.ReplicaProvisionedReadCapacityUnits;

    if (data.ReplicaProvisionedReadCapacityAutoScalingSettings) rtn.ReplicaProvisionedReadCapacityAutoScalingSettings = _AutoScalingSettingsDescription.serialize!(data.ReplicaProvisionedReadCapacityAutoScalingSettings as any);

    if (data.ReplicaProvisionedWriteCapacityUnits) rtn.ReplicaProvisionedWriteCapacityUnits = data.ReplicaProvisionedWriteCapacityUnits;

    if (data.ReplicaProvisionedWriteCapacityAutoScalingSettings) rtn.ReplicaProvisionedWriteCapacityAutoScalingSettings = _AutoScalingSettingsDescription.serialize!(data.ReplicaProvisionedWriteCapacityAutoScalingSettings as any);

    if (data.ReplicaGlobalSecondaryIndexSettings) rtn.ReplicaGlobalSecondaryIndexSettings = _ReplicaGlobalSecondaryIndexSettingsDescriptionList.serialize!(data.ReplicaGlobalSecondaryIndexSettings as any);

        return rtn;
    },
};