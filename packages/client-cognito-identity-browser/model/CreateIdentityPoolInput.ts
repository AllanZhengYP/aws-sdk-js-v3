import {_IdentityProviders} from './_IdentityProviders';
import {_OIDCProviderList} from './_OIDCProviderList';
import {_CognitoIdentityProviderList} from './_CognitoIdentityProviderList';
import {_SAMLProviderList} from './_SAMLProviderList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {CreateIdentityPoolInput as CreateIdentityPoolInput_Type} from '../types/CreateIdentityPoolInput';

export const CreateIdentityPoolInput: _OperationInputShapeModel_<CreateIdentityPoolInput_Type, any> = {
    serialize: (data: CreateIdentityPoolInput_Type): any => {
    		if (!data.IdentityPoolName||!data.AllowUnauthenticatedIdentities) {
        throw new Error('CreateIdentityPoolInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityPoolName) rtn.IdentityPoolName = data.IdentityPoolName;

    if (data.AllowUnauthenticatedIdentities) rtn.AllowUnauthenticatedIdentities = data.AllowUnauthenticatedIdentities;

    if (data.SupportedLoginProviders) rtn.SupportedLoginProviders = _IdentityProviders.serialize!(data.SupportedLoginProviders as any);

    if (data.DeveloperProviderName) rtn.DeveloperProviderName = data.DeveloperProviderName;

    if (data.OpenIdConnectProviderARNs) rtn.OpenIdConnectProviderARNs = _OIDCProviderList.serialize!(data.OpenIdConnectProviderARNs as any);

    if (data.CognitoIdentityProviders) rtn.CognitoIdentityProviders = _CognitoIdentityProviderList.serialize!(data.CognitoIdentityProviders as any);

    if (data.SamlProviderARNs) rtn.SamlProviderARNs = _SAMLProviderList.serialize!(data.SamlProviderARNs as any);

        return rtn;
    },
};