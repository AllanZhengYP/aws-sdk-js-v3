import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_SSEDescription as _SSEDescription_Type} from '../types/_SSEDescription';

export const _SSEDescription: _StructureModel_<_SSEDescription_Type, any> = {
    parse: (data: any): _SSEDescription_Type => {
        let rtn: any = {};
        if (data.Status) rtn.Status = data.Status;
    if (data.SSEType) rtn.SSEType = data.SSEType;
    if (data.KMSMasterKeyArn) rtn.KMSMasterKeyArn = data.KMSMasterKeyArn;
        return rtn as _SSEDescription_Type;
    },
    serialize: (data: _SSEDescription_Type): any => {
        let rtn: any = {};
        if (data.Status) rtn.Status = data.Status;

    if (data.SSEType) rtn.SSEType = data.SSEType;

    if (data.KMSMasterKeyArn) rtn.KMSMasterKeyArn = data.KMSMasterKeyArn;

        return rtn;
    },
};