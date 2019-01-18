import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Capacity as _Capacity_Type} from '../types/_Capacity';

export const _Capacity: _StructureModel_<_Capacity_Type, any> = {
    parse: (data: any): _Capacity_Type => {
        let rtn: any = {};
        if (data.CapacityUnits) rtn.CapacityUnits = data.CapacityUnits;
        return rtn as _Capacity_Type;
    },
    serialize: (data: _Capacity_Type): any => {
        let rtn: any = {};
        if (data.CapacityUnits) rtn.CapacityUnits = data.CapacityUnits;

        return rtn;
    },
};