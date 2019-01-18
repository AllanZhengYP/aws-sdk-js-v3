import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_SSESpecification as _SSESpecification_Type} from '../types/_SSESpecification';

export const _SSESpecification: _StructureModel_<_SSESpecification_Type, any> = {
    parse: (data: any): _SSESpecification_Type => {
        let rtn: any = {};
        if (data.Enabled) rtn.Enabled = data.Enabled;
    if (data.SSEType) rtn.SSEType = data.SSEType;
    if (data.KMSMasterKeyId) rtn.KMSMasterKeyId = data.KMSMasterKeyId;
        return rtn as _SSESpecification_Type;
    },
    serialize: (data: _SSESpecification_Type): any => {
        let rtn: any = {};
        if (data.Enabled) rtn.Enabled = data.Enabled;

    if (data.SSEType) rtn.SSEType = data.SSEType;

    if (data.KMSMasterKeyId) rtn.KMSMasterKeyId = data.KMSMasterKeyId;

        return rtn;
    },
};