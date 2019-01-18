import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ExpiredNextTokenException as ExpiredNextTokenException_Type} from '../types/ExpiredNextTokenException';

export const ExpiredNextTokenException: _StructureModel_<ExpiredNextTokenException_Type, any> = {
    parse: (data: any): ExpiredNextTokenException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ExpiredNextTokenException_Type;
    },
    serialize: (data: ExpiredNextTokenException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};