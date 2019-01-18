import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ReplicaNotFoundException as ReplicaNotFoundException_Type} from '../types/ReplicaNotFoundException';

export const ReplicaNotFoundException: _StructureModel_<ReplicaNotFoundException_Type, any> = {
    parse: (data: any): ReplicaNotFoundException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ReplicaNotFoundException_Type;
    },
    serialize: (data: ReplicaNotFoundException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};