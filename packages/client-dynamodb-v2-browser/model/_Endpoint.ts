import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Endpoint as _Endpoint_Type} from '../types/_Endpoint';

export const _Endpoint: _StructureModel_<_Endpoint_Type, any> = {
    parse: (data: any): _Endpoint_Type => {
        let rtn: any = {};
        if (data.Address) rtn.Address = data.Address;
    if (data.CachePeriodInMinutes) rtn.CachePeriodInMinutes = data.CachePeriodInMinutes;
        return rtn as _Endpoint_Type;
    },
    serialize: (data: _Endpoint_Type): any => {
    		if (!data.Address||!data.CachePeriodInMinutes) {
        throw new Error('_Endpoint has missing required parameter');
    }
        let rtn: any = {};
        if (data.Address) rtn.Address = data.Address;

    if (data.CachePeriodInMinutes) rtn.CachePeriodInMinutes = data.CachePeriodInMinutes;

        return rtn;
    },
};