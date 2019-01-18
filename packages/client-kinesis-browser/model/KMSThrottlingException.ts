import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {KMSThrottlingException as KMSThrottlingException_Type} from '../types/KMSThrottlingException';

export const KMSThrottlingException: _StructureModel_<KMSThrottlingException_Type, any> = {
    parse: (data: any): KMSThrottlingException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as KMSThrottlingException_Type;
    },
    serialize: (data: KMSThrottlingException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};