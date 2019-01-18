import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_CognitoIdentityProvider as _CognitoIdentityProvider_Type} from '../types/_CognitoIdentityProvider';
import {_CognitoIdentityProvider} from './_CognitoIdentityProvider';

export const _CognitoIdentityProviderList: _ListModel_<_CognitoIdentityProvider_Type, any> = {
    parse: (data: any): Array<_CognitoIdentityProvider_Type> => {
        return (data as Array<_CognitoIdentityProvider_Type>).map(_item => _CognitoIdentityProvider.parse!(_item));
    },

    serialize: (input: Array<_CognitoIdentityProvider_Type>): any => {
        return input.map(_item => _CognitoIdentityProvider.serialize!(_item));
    },
};