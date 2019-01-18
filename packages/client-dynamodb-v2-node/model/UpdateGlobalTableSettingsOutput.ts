import {_ReplicaSettingsDescriptionList} from './_ReplicaSettingsDescriptionList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {UpdateGlobalTableSettingsOutput as UpdateGlobalTableSettingsOutput_Type} from '../types/UpdateGlobalTableSettingsOutput';

export const UpdateGlobalTableSettingsOutput: _OperationOutputShapeModel_<UpdateGlobalTableSettingsOutput_Type, any> = {
    parse: (data: any): UpdateGlobalTableSettingsOutput_Type => {
        let rtn: any = {};
        if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;
    if (data.ReplicaSettings) rtn.ReplicaSettings = _ReplicaSettingsDescriptionList.parse!(data.ReplicaSettings);
        return rtn as UpdateGlobalTableSettingsOutput_Type;
    },
};