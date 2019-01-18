import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Credentials as _Credentials_Type} from '../types/_Credentials';

export const _Credentials: _StructureModel_<_Credentials_Type, any> = {
    parse: (data: any): _Credentials_Type => {
        let rtn: any = {};
        if (data.AccessKeyId) rtn.AccessKeyId = data.AccessKeyId;
    if (data.SecretKey) rtn.SecretKey = data.SecretKey;
    if (data.SessionToken) rtn.SessionToken = data.SessionToken;
    if (data.Expiration) rtn.Expiration = _toDate_(data.Expiration);
        return rtn as _Credentials_Type;
    },
    serialize: (data: _Credentials_Type): any => {
        let rtn: any = {};
        if (data.AccessKeyId) rtn.AccessKeyId = data.AccessKeyId;

    if (data.SecretKey) rtn.SecretKey = data.SecretKey;

    if (data.SessionToken) rtn.SessionToken = data.SessionToken;

    if (data.Expiration) rtn.Expiration = _toDate_(data.Expiration);

        return rtn;
    },
};