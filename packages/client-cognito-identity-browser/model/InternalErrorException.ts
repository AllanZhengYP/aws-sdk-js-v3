import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {InternalErrorException as InternalErrorException_Type} from '../types/InternalErrorException';

export const InternalErrorException: _StructureModel_<InternalErrorException_Type, any> = {
    parse: (data: any): InternalErrorException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as InternalErrorException_Type;
    },
    serialize: (data: InternalErrorException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};