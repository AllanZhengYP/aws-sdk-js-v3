import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_Replica} from './_Replica';

export const _ReplicaList: _List_ = {
    type: 'list',
    member: {
        shape: _Replica,
    },
};