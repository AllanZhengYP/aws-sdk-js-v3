import {_LoginsMap} from './_LoginsMap';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetOpenIdTokenInput: _Structure_ = {
    type: 'structure',
    required: [
        'IdentityId',
    ],
    members: {
        IdentityId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Logins: {
            shape: _LoginsMap,
        },
    },
};