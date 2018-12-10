import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_Shard} from './_Shard';

export const _ShardList: _List_ = {
    type: 'list',
    member: {
        shape: _Shard,
    },
};