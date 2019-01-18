import {_ReplicaUpdateList} from './_ReplicaUpdateList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {UpdateGlobalTableInput as UpdateGlobalTableInput_Type} from '../types/UpdateGlobalTableInput';

export const UpdateGlobalTableInput: _OperationInputShapeModel_<UpdateGlobalTableInput_Type, any> = {
    serialize: (data: UpdateGlobalTableInput_Type): any => {
    		if (!data.GlobalTableName||!data.ReplicaUpdates) {
        throw new Error('UpdateGlobalTableInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;

    if (data.ReplicaUpdates) rtn.ReplicaUpdates = _ReplicaUpdateList.serialize!(data.ReplicaUpdates as any);

        return rtn;
    },
};