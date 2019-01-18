import {_AutoScalingSettingsDescription} from './_AutoScalingSettingsDescription';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ReplicaGlobalSecondaryIndexSettingsDescription as _ReplicaGlobalSecondaryIndexSettingsDescription_Type} from '../types/_ReplicaGlobalSecondaryIndexSettingsDescription';

export const _ReplicaGlobalSecondaryIndexSettingsDescription: _StructureModel_<_ReplicaGlobalSecondaryIndexSettingsDescription_Type, any> = {
    parse: (data: any): _ReplicaGlobalSecondaryIndexSettingsDescription_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
    if (data.IndexStatus) rtn.IndexStatus = data.IndexStatus;
    if (data.ProvisionedReadCapacityUnits) rtn.ProvisionedReadCapacityUnits = data.ProvisionedReadCapacityUnits;
    if (data.ProvisionedReadCapacityAutoScalingSettings) rtn.ProvisionedReadCapacityAutoScalingSettings = _AutoScalingSettingsDescription.parse!(data.ProvisionedReadCapacityAutoScalingSettings);
    if (data.ProvisionedWriteCapacityUnits) rtn.ProvisionedWriteCapacityUnits = data.ProvisionedWriteCapacityUnits;
    if (data.ProvisionedWriteCapacityAutoScalingSettings) rtn.ProvisionedWriteCapacityAutoScalingSettings = _AutoScalingSettingsDescription.parse!(data.ProvisionedWriteCapacityAutoScalingSettings);
        return rtn as _ReplicaGlobalSecondaryIndexSettingsDescription_Type;
    },
    serialize: (data: _ReplicaGlobalSecondaryIndexSettingsDescription_Type): any => {
    		if (!data.IndexName) {
        throw new Error('_ReplicaGlobalSecondaryIndexSettingsDescription has missing required parameter');
    }
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.IndexStatus) rtn.IndexStatus = data.IndexStatus;

    if (data.ProvisionedReadCapacityUnits) rtn.ProvisionedReadCapacityUnits = data.ProvisionedReadCapacityUnits;

    if (data.ProvisionedReadCapacityAutoScalingSettings) rtn.ProvisionedReadCapacityAutoScalingSettings = _AutoScalingSettingsDescription.serialize!(data.ProvisionedReadCapacityAutoScalingSettings as any);

    if (data.ProvisionedWriteCapacityUnits) rtn.ProvisionedWriteCapacityUnits = data.ProvisionedWriteCapacityUnits;

    if (data.ProvisionedWriteCapacityAutoScalingSettings) rtn.ProvisionedWriteCapacityAutoScalingSettings = _AutoScalingSettingsDescription.serialize!(data.ProvisionedWriteCapacityAutoScalingSettings as any);

        return rtn;
    },
};