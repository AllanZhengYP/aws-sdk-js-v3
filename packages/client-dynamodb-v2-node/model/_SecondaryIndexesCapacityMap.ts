import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_Capacity} from './_Capacity';
import {_Capacity as _Capacity_Type} from '../types/_Capacity';

export const _SecondaryIndexesCapacityMap: _MapModel_<_Capacity_Type, any> = {
    parse: (data: any): {[key: string]: _Capacity_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _Capacity.parse!(data[key]);
        }
        return rtn as {[key: string]: _Capacity_Type};
    },
    serialize: (data: {[key: string]: _Capacity_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _Capacity.parse!(data[key]);
        }
        return rtn;
    },
};