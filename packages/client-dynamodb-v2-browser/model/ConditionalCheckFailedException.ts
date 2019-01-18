import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ConditionalCheckFailedException as ConditionalCheckFailedException_Type} from '../types/ConditionalCheckFailedException';

export const ConditionalCheckFailedException: _StructureModel_<ConditionalCheckFailedException_Type, any> = {
    parse: (data: any): ConditionalCheckFailedException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ConditionalCheckFailedException_Type;
    },
    serialize: (data: ConditionalCheckFailedException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};