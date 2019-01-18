import {_AutoScalingSettingsUpdate} from './_AutoScalingSettingsUpdate';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_GlobalTableGlobalSecondaryIndexSettingsUpdate as _GlobalTableGlobalSecondaryIndexSettingsUpdate_Type} from '../types/_GlobalTableGlobalSecondaryIndexSettingsUpdate';

export const _GlobalTableGlobalSecondaryIndexSettingsUpdate: _StructureModel_<_GlobalTableGlobalSecondaryIndexSettingsUpdate_Type, any> = {
    parse: (data: any): _GlobalTableGlobalSecondaryIndexSettingsUpdate_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
    if (data.ProvisionedWriteCapacityUnits) rtn.ProvisionedWriteCapacityUnits = data.ProvisionedWriteCapacityUnits;
    if (data.ProvisionedWriteCapacityAutoScalingSettingsUpdate) rtn.ProvisionedWriteCapacityAutoScalingSettingsUpdate = _AutoScalingSettingsUpdate.parse!(data.ProvisionedWriteCapacityAutoScalingSettingsUpdate);
        return rtn as _GlobalTableGlobalSecondaryIndexSettingsUpdate_Type;
    },
    serialize: (data: _GlobalTableGlobalSecondaryIndexSettingsUpdate_Type): any => {
    		if (!data.IndexName) {
        throw new Error('_GlobalTableGlobalSecondaryIndexSettingsUpdate has missing required parameter');
    }
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.ProvisionedWriteCapacityUnits) rtn.ProvisionedWriteCapacityUnits = data.ProvisionedWriteCapacityUnits;

    if (data.ProvisionedWriteCapacityAutoScalingSettingsUpdate) rtn.ProvisionedWriteCapacityAutoScalingSettingsUpdate = _AutoScalingSettingsUpdate.serialize!(data.ProvisionedWriteCapacityAutoScalingSettingsUpdate as any);

        return rtn;
    },
};