import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {InvalidParameterException as InvalidParameterException_Type} from '../types/InvalidParameterException';

export const InvalidParameterException: _StructureModel_<InvalidParameterException_Type, any> = {
    parse: (data: any): InvalidParameterException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as InvalidParameterException_Type;
    },
    serialize: (data: InvalidParameterException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};