import {_Key} from './_Key';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_DeleteRequest as _DeleteRequest_Type} from '../types/_DeleteRequest';

export const _DeleteRequest: _StructureModel_<_DeleteRequest_Type, any> = {
    parse: (data: any): _DeleteRequest_Type => {
        let rtn: any = {};
        if (data.Key) rtn.Key = _Key.parse!(data.Key);
        return rtn as _DeleteRequest_Type;
    },
    serialize: (data: _DeleteRequest_Type): any => {
    		if (!data.Key) {
        throw new Error('_DeleteRequest has missing required parameter');
    }
        let rtn: any = {};
        if (data.Key) rtn.Key = _Key.serialize!(data.Key as any);

        return rtn;
    },
};