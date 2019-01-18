import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ReplicaDescription as _ReplicaDescription_Type} from '../types/_ReplicaDescription';

export const _ReplicaDescription: _StructureModel_<_ReplicaDescription_Type, any> = {
    parse: (data: any): _ReplicaDescription_Type => {
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;
        return rtn as _ReplicaDescription_Type;
    },
    serialize: (data: _ReplicaDescription_Type): any => {
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;

        return rtn;
    },
};