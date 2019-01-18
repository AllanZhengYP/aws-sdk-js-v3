import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_TimeToLiveSpecification as _TimeToLiveSpecification_Type} from '../types/_TimeToLiveSpecification';

export const _TimeToLiveSpecification: _StructureModel_<_TimeToLiveSpecification_Type, any> = {
    parse: (data: any): _TimeToLiveSpecification_Type => {
        let rtn: any = {};
        if (data.Enabled) rtn.Enabled = data.Enabled;
    if (data.AttributeName) rtn.AttributeName = data.AttributeName;
        return rtn as _TimeToLiveSpecification_Type;
    },
    serialize: (data: _TimeToLiveSpecification_Type): any => {
    		if (!data.Enabled||!data.AttributeName) {
        throw new Error('_TimeToLiveSpecification has missing required parameter');
    }
        let rtn: any = {};
        if (data.Enabled) rtn.Enabled = data.Enabled;

    if (data.AttributeName) rtn.AttributeName = data.AttributeName;

        return rtn;
    },
};