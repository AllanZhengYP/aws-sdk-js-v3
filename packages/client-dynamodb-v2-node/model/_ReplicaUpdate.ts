import {_CreateReplicaAction} from './_CreateReplicaAction';
import {_DeleteReplicaAction} from './_DeleteReplicaAction';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ReplicaUpdate as _ReplicaUpdate_Type} from '../types/_ReplicaUpdate';

export const _ReplicaUpdate: _StructureModel_<_ReplicaUpdate_Type, any> = {
    parse: (data: any): _ReplicaUpdate_Type => {
        let rtn: any = {};
        if (data.Create) rtn.Create = _CreateReplicaAction.parse!(data.Create);
    if (data.Delete) rtn.Delete = _DeleteReplicaAction.parse!(data.Delete);
        return rtn as _ReplicaUpdate_Type;
    },
    serialize: (data: _ReplicaUpdate_Type): any => {
        let rtn: any = {};
        if (data.Create) rtn.Create = _CreateReplicaAction.serialize!(data.Create as any);

    if (data.Delete) rtn.Delete = _DeleteReplicaAction.serialize!(data.Delete as any);

        return rtn;
    },
};