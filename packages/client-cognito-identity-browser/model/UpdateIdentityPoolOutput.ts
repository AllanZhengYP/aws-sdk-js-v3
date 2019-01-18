import {_IdentityProviders} from './_IdentityProviders';
import {_OIDCProviderList} from './_OIDCProviderList';
import {_CognitoIdentityProviderList} from './_CognitoIdentityProviderList';
import {_SAMLProviderList} from './_SAMLProviderList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {UpdateIdentityPoolOutput as UpdateIdentityPoolOutput_Type} from '../types/UpdateIdentityPoolOutput';

export const UpdateIdentityPoolOutput: _OperationOutputShapeModel_<UpdateIdentityPoolOutput_Type, any> = {
    parse: (data: any): UpdateIdentityPoolOutput_Type => {
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;
    if (data.IdentityPoolName) rtn.IdentityPoolName = data.IdentityPoolName;
    if (data.AllowUnauthenticatedIdentities) rtn.AllowUnauthenticatedIdentities = data.AllowUnauthenticatedIdentities;
    if (data.SupportedLoginProviders) rtn.SupportedLoginProviders = _IdentityProviders.parse!(data.SupportedLoginProviders);
    if (data.DeveloperProviderName) rtn.DeveloperProviderName = data.DeveloperProviderName;
    if (data.OpenIdConnectProviderARNs) rtn.OpenIdConnectProviderARNs = _OIDCProviderList.parse!(data.OpenIdConnectProviderARNs);
    if (data.CognitoIdentityProviders) rtn.CognitoIdentityProviders = _CognitoIdentityProviderList.parse!(data.CognitoIdentityProviders);
    if (data.SamlProviderARNs) rtn.SamlProviderARNs = _SAMLProviderList.parse!(data.SamlProviderARNs);
        return rtn as UpdateIdentityPoolOutput_Type;
    },
};