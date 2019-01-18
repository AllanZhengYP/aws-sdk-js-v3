import {_AutoScalingSettingsUpdate} from './_AutoScalingSettingsUpdate';
import {_GlobalTableGlobalSecondaryIndexSettingsUpdateList} from './_GlobalTableGlobalSecondaryIndexSettingsUpdateList';
import {_ReplicaSettingsUpdateList} from './_ReplicaSettingsUpdateList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {UpdateGlobalTableSettingsInput as UpdateGlobalTableSettingsInput_Type} from '../types/UpdateGlobalTableSettingsInput';

export const UpdateGlobalTableSettingsInput: _OperationInputShapeModel_<UpdateGlobalTableSettingsInput_Type, any> = {
    serialize: (data: UpdateGlobalTableSettingsInput_Type): any => {
    		if (!data.GlobalTableName) {
        throw new Error('UpdateGlobalTableSettingsInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;

    if (data.GlobalTableProvisionedWriteCapacityUnits) rtn.GlobalTableProvisionedWriteCapacityUnits = data.GlobalTableProvisionedWriteCapacityUnits;

    if (data.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate) rtn.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate = _AutoScalingSettingsUpdate.serialize!(data.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate as any);

    if (data.GlobalTableGlobalSecondaryIndexSettingsUpdate) rtn.GlobalTableGlobalSecondaryIndexSettingsUpdate = _GlobalTableGlobalSecondaryIndexSettingsUpdateList.serialize!(data.GlobalTableGlobalSecondaryIndexSettingsUpdate as any);

    if (data.ReplicaSettingsUpdate) rtn.ReplicaSettingsUpdate = _ReplicaSettingsUpdateList.serialize!(data.ReplicaSettingsUpdate as any);

        return rtn;
    },
};