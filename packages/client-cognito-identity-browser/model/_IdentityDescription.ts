import {_LoginsList} from './_LoginsList';
import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_IdentityDescription as _IdentityDescription_Type} from '../types/_IdentityDescription';

export const _IdentityDescription: _StructureModel_<_IdentityDescription_Type, any> = {
    parse: (data: any): _IdentityDescription_Type => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;
    if (data.Logins) rtn.Logins = _LoginsList.parse!(data.Logins);
    if (data.CreationDate) rtn.CreationDate = _toDate_(data.CreationDate);
    if (data.LastModifiedDate) rtn.LastModifiedDate = _toDate_(data.LastModifiedDate);
        return rtn as _IdentityDescription_Type;
    },
    serialize: (data: _IdentityDescription_Type): any => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;

    if (data.Logins) rtn.Logins = _LoginsList.serialize!(data.Logins as any);

    if (data.CreationDate) rtn.CreationDate = _toDate_(data.CreationDate);

    if (data.LastModifiedDate) rtn.LastModifiedDate = _toDate_(data.LastModifiedDate);

        return rtn;
    },
};