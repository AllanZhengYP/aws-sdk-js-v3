import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {InternalServerError as InternalServerError_Type} from '../types/InternalServerError';

export const InternalServerError: _StructureModel_<InternalServerError_Type, any> = {
    parse: (data: any): InternalServerError_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as InternalServerError_Type;
    },
    serialize: (data: InternalServerError_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};