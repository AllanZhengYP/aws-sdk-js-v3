import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {KMSAccessDeniedException as KMSAccessDeniedException_Type} from '../types/KMSAccessDeniedException';

export const KMSAccessDeniedException: _StructureModel_<KMSAccessDeniedException_Type, any> = {
    parse: (data: any): KMSAccessDeniedException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as KMSAccessDeniedException_Type;
    },
    serialize: (data: KMSAccessDeniedException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};