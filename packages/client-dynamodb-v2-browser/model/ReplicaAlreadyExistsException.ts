import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ReplicaAlreadyExistsException as ReplicaAlreadyExistsException_Type} from '../types/ReplicaAlreadyExistsException';

export const ReplicaAlreadyExistsException: _StructureModel_<ReplicaAlreadyExistsException_Type, any> = {
    parse: (data: any): ReplicaAlreadyExistsException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ReplicaAlreadyExistsException_Type;
    },
    serialize: (data: ReplicaAlreadyExistsException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};