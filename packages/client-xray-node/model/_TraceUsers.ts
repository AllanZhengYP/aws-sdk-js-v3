import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_TraceUser} from './_TraceUser';

export const _TraceUsers: _List_ = {
    type: 'list',
    member: {
        shape: _TraceUser,
    },
};