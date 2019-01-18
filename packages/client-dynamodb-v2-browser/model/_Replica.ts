import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Replica as _Replica_Type} from '../types/_Replica';

export const _Replica: _StructureModel_<_Replica_Type, any> = {
    parse: (data: any): _Replica_Type => {
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;
        return rtn as _Replica_Type;
    },
    serialize: (data: _Replica_Type): any => {
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;

        return rtn;
    },
};