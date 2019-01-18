import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_CognitoIdentityProvider as _CognitoIdentityProvider_Type} from '../types/_CognitoIdentityProvider';

export const _CognitoIdentityProvider: _StructureModel_<_CognitoIdentityProvider_Type, any> = {
    parse: (data: any): _CognitoIdentityProvider_Type => {
        let rtn: any = {};
        if (data.ProviderName) rtn.ProviderName = data.ProviderName;
    if (data.ClientId) rtn.ClientId = data.ClientId;
    if (data.ServerSideTokenCheck) rtn.ServerSideTokenCheck = data.ServerSideTokenCheck;
        return rtn as _CognitoIdentityProvider_Type;
    },
    serialize: (data: _CognitoIdentityProvider_Type): any => {
        let rtn: any = {};
        if (data.ProviderName) rtn.ProviderName = data.ProviderName;

    if (data.ClientId) rtn.ClientId = data.ClientId;

    if (data.ServerSideTokenCheck) rtn.ServerSideTokenCheck = data.ServerSideTokenCheck;

        return rtn;
    },
};