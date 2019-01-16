import {StructureModel as _StructureModel_} from '@aws-sdk/types';

declare type _AttributeDefinition_Type = {AttributeName: string, AttributeType: string};
export const _AttributeDefinition: _StructureModel_<_AttributeDefinition_Type, any> = {
    parse: (data: any): _AttributeDefinition_Type => {
        let rtn: any = {};
        if (data.AttributeName) rtn.AttributeName = data.AttributeName;
        else throw new Error();
        if (data.AttributeType) rtn.AttributeType = data.AttributeType;
        else throw new Error();
        return rtn as {AttributeName: string, AttributeType: string};
    },

    serialize: (input: _AttributeDefinition_Type): any => {
        let rtn: any = {};
        if (input.AttributeName) rtn.AttributeName = input.AttributeName;
        else throw new Error();
        if (input.AttributeType) rtn.AttributeType = input.AttributeType;
        else throw new Error();
        return rtn;
    }
};