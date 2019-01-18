import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ProvisionedThroughput as _ProvisionedThroughput_Type} from '../types/_ProvisionedThroughput';

export const _ProvisionedThroughput: _StructureModel_<_ProvisionedThroughput_Type, any> = {
    parse: (data: any): _ProvisionedThroughput_Type => {
        let rtn: any = {};
        if (data.ReadCapacityUnits) rtn.ReadCapacityUnits = data.ReadCapacityUnits;
    if (data.WriteCapacityUnits) rtn.WriteCapacityUnits = data.WriteCapacityUnits;
        return rtn as _ProvisionedThroughput_Type;
    },
    serialize: (data: _ProvisionedThroughput_Type): any => {
    		if (!data.ReadCapacityUnits||!data.WriteCapacityUnits) {
        throw new Error('_ProvisionedThroughput has missing required parameter');
    }
        let rtn: any = {};
        if (data.ReadCapacityUnits) rtn.ReadCapacityUnits = data.ReadCapacityUnits;

    if (data.WriteCapacityUnits) rtn.WriteCapacityUnits = data.WriteCapacityUnits;

        return rtn;
    },
};