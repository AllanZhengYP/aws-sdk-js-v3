import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {KMSInvalidStateException as KMSInvalidStateException_Type} from '../types/KMSInvalidStateException';

export const KMSInvalidStateException: _StructureModel_<KMSInvalidStateException_Type, any> = {
    parse: (data: any): KMSInvalidStateException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as KMSInvalidStateException_Type;
    },
    serialize: (data: KMSInvalidStateException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};