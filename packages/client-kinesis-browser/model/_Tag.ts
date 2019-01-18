import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Tag as _Tag_Type} from '../types/_Tag';

export const _Tag: _StructureModel_<_Tag_Type, any> = {
    parse: (data: any): _Tag_Type => {
        let rtn: any = {};
        if (data.Key) rtn.Key = data.Key;
    if (data.Value) rtn.Value = data.Value;
        return rtn as _Tag_Type;
    },
    serialize: (data: _Tag_Type): any => {
    		if (!data.Key) {
        throw new Error('_Tag has missing required parameter');
    }
        let rtn: any = {};
        if (data.Key) rtn.Key = data.Key;

    if (data.Value) rtn.Value = data.Value;

        return rtn;
    },
};