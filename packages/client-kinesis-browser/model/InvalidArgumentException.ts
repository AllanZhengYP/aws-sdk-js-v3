import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {InvalidArgumentException as InvalidArgumentException_Type} from '../types/InvalidArgumentException';

export const InvalidArgumentException: _StructureModel_<InvalidArgumentException_Type, any> = {
    parse: (data: any): InvalidArgumentException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as InvalidArgumentException_Type;
    },
    serialize: (data: InvalidArgumentException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};