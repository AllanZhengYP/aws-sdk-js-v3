import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ExpiredIteratorException as ExpiredIteratorException_Type} from '../types/ExpiredIteratorException';

export const ExpiredIteratorException: _StructureModel_<ExpiredIteratorException_Type, any> = {
    parse: (data: any): ExpiredIteratorException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ExpiredIteratorException_Type;
    },
    serialize: (data: ExpiredIteratorException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};