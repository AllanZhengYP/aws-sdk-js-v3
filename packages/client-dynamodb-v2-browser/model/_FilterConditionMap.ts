import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_Condition} from './_Condition';
import {_Condition as _Condition_Type} from '../types/_Condition';

export const _FilterConditionMap: _MapModel_<_Condition_Type, any> = {
    parse: (data: any): {[key: string]: _Condition_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _Condition.parse!(data[key]);
        }
        return rtn as {[key: string]: _Condition_Type};
    },
    serialize: (data: {[key: string]: _Condition_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _Condition.parse!(data[key]);
        }
        return rtn;
    },
};