import {_PutItemInputAttributeMap} from './_PutItemInputAttributeMap';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_PutRequest as _PutRequest_Type} from '../types/_PutRequest';

export const _PutRequest: _StructureModel_<_PutRequest_Type, any> = {
    parse: (data: any): _PutRequest_Type => {
        let rtn: any = {};
        if (data.Item) rtn.Item = _PutItemInputAttributeMap.parse!(data.Item);
        return rtn as _PutRequest_Type;
    },
    serialize: (data: _PutRequest_Type): any => {
    		if (!data.Item) {
        throw new Error('_PutRequest has missing required parameter');
    }
        let rtn: any = {};
        if (data.Item) rtn.Item = _PutItemInputAttributeMap.serialize!(data.Item as any);

        return rtn;
    },
};