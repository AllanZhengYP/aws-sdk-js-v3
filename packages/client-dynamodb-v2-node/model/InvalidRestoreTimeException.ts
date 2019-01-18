import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {InvalidRestoreTimeException as InvalidRestoreTimeException_Type} from '../types/InvalidRestoreTimeException';

export const InvalidRestoreTimeException: _StructureModel_<InvalidRestoreTimeException_Type, any> = {
    parse: (data: any): InvalidRestoreTimeException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as InvalidRestoreTimeException_Type;
    },
    serialize: (data: InvalidRestoreTimeException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};