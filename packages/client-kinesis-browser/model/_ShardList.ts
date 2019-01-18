import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_Shard as _Shard_Type} from '../types/_Shard';
import {_Shard} from './_Shard';

export const _ShardList: _ListModel_<_Shard_Type, any> = {
    parse: (data: any): Array<_Shard_Type> => {
        return (data as Array<_Shard_Type>).map(_item => _Shard.parse!(_item));
    },

    serialize: (input: Array<_Shard_Type>): any => {
        return input.map(_item => _Shard.serialize!(_item));
    },
};