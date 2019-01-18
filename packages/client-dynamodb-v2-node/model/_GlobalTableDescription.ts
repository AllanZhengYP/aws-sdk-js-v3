import {_ReplicaDescriptionList} from './_ReplicaDescriptionList';
import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_GlobalTableDescription as _GlobalTableDescription_Type} from '../types/_GlobalTableDescription';

export const _GlobalTableDescription: _StructureModel_<_GlobalTableDescription_Type, any> = {
    parse: (data: any): _GlobalTableDescription_Type => {
        let rtn: any = {};
        if (data.ReplicationGroup) rtn.ReplicationGroup = _ReplicaDescriptionList.parse!(data.ReplicationGroup);
    if (data.GlobalTableArn) rtn.GlobalTableArn = data.GlobalTableArn;
    if (data.CreationDateTime) rtn.CreationDateTime = _toDate_(data.CreationDateTime);
    if (data.GlobalTableStatus) rtn.GlobalTableStatus = data.GlobalTableStatus;
    if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;
        return rtn as _GlobalTableDescription_Type;
    },
    serialize: (data: _GlobalTableDescription_Type): any => {
        let rtn: any = {};
        if (data.ReplicationGroup) rtn.ReplicationGroup = _ReplicaDescriptionList.serialize!(data.ReplicationGroup as any);

    if (data.GlobalTableArn) rtn.GlobalTableArn = data.GlobalTableArn;

    if (data.CreationDateTime) rtn.CreationDateTime = _toDate_(data.CreationDateTime);

    if (data.GlobalTableStatus) rtn.GlobalTableStatus = data.GlobalTableStatus;

    if (data.GlobalTableName) rtn.GlobalTableName = data.GlobalTableName;

        return rtn;
    },
};