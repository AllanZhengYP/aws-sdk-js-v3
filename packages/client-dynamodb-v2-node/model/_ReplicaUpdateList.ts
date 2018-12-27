import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_ReplicaUpdate} from './_ReplicaUpdate';

export const _ReplicaUpdateList: _List_ = {
    type: 'list',
    member: {
        shape: _ReplicaUpdate,
    },
};