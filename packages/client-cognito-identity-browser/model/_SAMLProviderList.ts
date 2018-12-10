import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';

export const _SAMLProviderList: _List_ = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
            min: 20,
        },
    },
};