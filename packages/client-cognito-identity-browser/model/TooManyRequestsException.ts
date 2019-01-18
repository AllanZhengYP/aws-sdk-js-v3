import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {TooManyRequestsException as TooManyRequestsException_Type} from '../types/TooManyRequestsException';

export const TooManyRequestsException: _StructureModel_<TooManyRequestsException_Type, any> = {
    parse: (data: any): TooManyRequestsException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as TooManyRequestsException_Type;
    },
    serialize: (data: TooManyRequestsException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};