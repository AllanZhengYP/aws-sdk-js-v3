import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {KMSOptInRequired as KMSOptInRequired_Type} from '../types/KMSOptInRequired';

export const KMSOptInRequired: _StructureModel_<KMSOptInRequired_Type, any> = {
    parse: (data: any): KMSOptInRequired_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as KMSOptInRequired_Type;
    },
    serialize: (data: KMSOptInRequired_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};