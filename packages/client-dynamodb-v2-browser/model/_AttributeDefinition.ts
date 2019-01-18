import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_AttributeDefinition as _AttributeDefinition_Type} from '../types/_AttributeDefinition';

export const _AttributeDefinition: _StructureModel_<_AttributeDefinition_Type, any> = {
    parse: (data: any): _AttributeDefinition_Type => {
        let rtn: any = {};
        if (data.AttributeName) rtn.AttributeName = data.AttributeName;
    if (data.AttributeType) rtn.AttributeType = data.AttributeType;
        return rtn as _AttributeDefinition_Type;
    },
    serialize: (data: _AttributeDefinition_Type): any => {
    		if (!data.AttributeName||!data.AttributeType) {
        throw new Error('_AttributeDefinition has missing required parameter');
    }
        let rtn: any = {};
        if (data.AttributeName) rtn.AttributeName = data.AttributeName;

    if (data.AttributeType) rtn.AttributeType = data.AttributeType;

        return rtn;
    },
};