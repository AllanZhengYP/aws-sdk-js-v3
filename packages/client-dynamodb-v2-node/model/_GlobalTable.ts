import {_ReplicaList} from './_ReplicaList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_GlobalTable as _GlobalTable_Type} from '../types/_GlobalTable';

export const _GlobalTable: _StructureModel_<_GlobalTable_Type, any> = {
    parse: (data: any): _GlobalTable_Type => {
        let rtn: any = {};
        if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;
    if (data.ReplicationGroup) rtn.ReplicationGroup = _ReplicaList.parse!(data.ReplicationGroup);
        return rtn as _GlobalTable_Type;
    },
    serialize: (data: _GlobalTable_Type): any => {
        let rtn: any = {};
        if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;

    if (data.ReplicationGroup) rtn.ReplicationGroup = _ReplicaList.serialize!(data.ReplicationGroup as any);

        return rtn;
    },
};