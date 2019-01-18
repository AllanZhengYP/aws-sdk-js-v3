import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ConcurrentModificationException as ConcurrentModificationException_Type} from '../types/ConcurrentModificationException';

export const ConcurrentModificationException: _StructureModel_<ConcurrentModificationException_Type, any> = {
    parse: (data: any): ConcurrentModificationException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ConcurrentModificationException_Type;
    },
    serialize: (data: ConcurrentModificationException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};