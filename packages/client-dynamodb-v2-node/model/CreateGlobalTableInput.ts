import {_ReplicaList} from './_ReplicaList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {CreateGlobalTableInput as CreateGlobalTableInput_Type} from '../types/CreateGlobalTableInput';

export const CreateGlobalTableInput: _OperationInputShapeModel_<CreateGlobalTableInput_Type, any> = {
    serialize: (data: CreateGlobalTableInput_Type): any => {
    		if (!data.GlobalTableName||!data.ReplicationGroup) {
        throw new Error('CreateGlobalTableInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;

    if (data.ReplicationGroup) rtn.ReplicationGroup = _ReplicaList.serialize!(data.ReplicationGroup as any);

        return rtn;
    },
};