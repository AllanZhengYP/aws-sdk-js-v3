import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {KMSNotFoundException as KMSNotFoundException_Type} from '../types/KMSNotFoundException';

export const KMSNotFoundException: _StructureModel_<KMSNotFoundException_Type, any> = {
    parse: (data: any): KMSNotFoundException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as KMSNotFoundException_Type;
    },
    serialize: (data: KMSNotFoundException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};