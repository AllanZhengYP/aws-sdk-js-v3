import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_HashKeyRange as _HashKeyRange_Type} from '../types/_HashKeyRange';

export const _HashKeyRange: _StructureModel_<_HashKeyRange_Type, any> = {
    parse: (data: any): _HashKeyRange_Type => {
        let rtn: any = {};
        if (data.StartingHashKey) rtn.StartingHashKey = data.StartingHashKey;
    if (data.EndingHashKey) rtn.EndingHashKey = data.EndingHashKey;
        return rtn as _HashKeyRange_Type;
    },
    serialize: (data: _HashKeyRange_Type): any => {
    		if (!data.StartingHashKey||!data.EndingHashKey) {
        throw new Error('_HashKeyRange has missing required parameter');
    }
        let rtn: any = {};
        if (data.StartingHashKey) rtn.StartingHashKey = data.StartingHashKey;

    if (data.EndingHashKey) rtn.EndingHashKey = data.EndingHashKey;

        return rtn;
    },
};