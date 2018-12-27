import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';

export const _IdentityIdList: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
};