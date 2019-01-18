import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {LimitExceededException as LimitExceededException_Type} from '../types/LimitExceededException';

export const LimitExceededException: _StructureModel_<LimitExceededException_Type, any> = {
    parse: (data: any): LimitExceededException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as LimitExceededException_Type;
    },
    serialize: (data: LimitExceededException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};