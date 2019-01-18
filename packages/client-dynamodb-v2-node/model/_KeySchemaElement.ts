import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_KeySchemaElement as _KeySchemaElement_Type} from '../types/_KeySchemaElement';

export const _KeySchemaElement: _StructureModel_<_KeySchemaElement_Type, any> = {
    parse: (data: any): _KeySchemaElement_Type => {
        let rtn: any = {};
        if (data.AttributeName) rtn.AttributeName = data.AttributeName;
    if (data.KeyType) rtn.KeyType = data.KeyType;
        return rtn as _KeySchemaElement_Type;
    },
    serialize: (data: _KeySchemaElement_Type): any => {
    		if (!data.AttributeName||!data.KeyType) {
        throw new Error('_KeySchemaElement has missing required parameter');
    }
        let rtn: any = {};
        if (data.AttributeName) rtn.AttributeName = data.AttributeName;

    if (data.KeyType) rtn.KeyType = data.KeyType;

        return rtn;
    },
};