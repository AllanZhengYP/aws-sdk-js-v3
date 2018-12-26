import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_CognitoIdentityProvider} from './_CognitoIdentityProvider';

export const _CognitoIdentityProviderList: _List_ = {
    type: 'list',
    member: {
        shape: _CognitoIdentityProvider,
    },
};