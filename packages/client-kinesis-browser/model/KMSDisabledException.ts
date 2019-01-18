import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {KMSDisabledException as KMSDisabledException_Type} from '../types/KMSDisabledException';

export const KMSDisabledException: _StructureModel_<KMSDisabledException_Type, any> = {
    parse: (data: any): KMSDisabledException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as KMSDisabledException_Type;
    },
    serialize: (data: KMSDisabledException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};