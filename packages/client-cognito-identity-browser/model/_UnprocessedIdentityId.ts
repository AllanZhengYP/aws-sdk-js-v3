import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_UnprocessedIdentityId as _UnprocessedIdentityId_Type} from '../types/_UnprocessedIdentityId';

export const _UnprocessedIdentityId: _StructureModel_<_UnprocessedIdentityId_Type, any> = {
    parse: (data: any): _UnprocessedIdentityId_Type => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;
    if (data.ErrorCode) rtn.ErrorCode = data.ErrorCode;
        return rtn as _UnprocessedIdentityId_Type;
    },
    serialize: (data: _UnprocessedIdentityId_Type): any => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;

    if (data.ErrorCode) rtn.ErrorCode = data.ErrorCode;

        return rtn;
    },
};