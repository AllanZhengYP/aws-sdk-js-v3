import {_HashKeyRange} from './_HashKeyRange';
import {_SequenceNumberRange} from './_SequenceNumberRange';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Shard as _Shard_Type} from '../types/_Shard';

export const _Shard: _StructureModel_<_Shard_Type, any> = {
    parse: (data: any): _Shard_Type => {
        let rtn: any = {};
        if (data.ShardId) rtn.ShardId = data.ShardId;
    if (data.ParentShardId) rtn.ParentShardId = data.ParentShardId;
    if (data.AdjacentParentShardId) rtn.AdjacentParentShardId = data.AdjacentParentShardId;
    if (data.HashKeyRange) rtn.HashKeyRange = _HashKeyRange.parse!(data.HashKeyRange);
    if (data.SequenceNumberRange) rtn.SequenceNumberRange = _SequenceNumberRange.parse!(data.SequenceNumberRange);
        return rtn as _Shard_Type;
    },
    serialize: (data: _Shard_Type): any => {
    		if (!data.ShardId||!data.HashKeyRange||!data.SequenceNumberRange) {
        throw new Error('_Shard has missing required parameter');
    }
        let rtn: any = {};
        if (data.ShardId) rtn.ShardId = data.ShardId;

    if (data.ParentShardId) rtn.ParentShardId = data.ParentShardId;

    if (data.AdjacentParentShardId) rtn.AdjacentParentShardId = data.AdjacentParentShardId;

    if (data.HashKeyRange) rtn.HashKeyRange = _HashKeyRange.serialize!(data.HashKeyRange as any);

    if (data.SequenceNumberRange) rtn.SequenceNumberRange = _SequenceNumberRange.serialize!(data.SequenceNumberRange as any);

        return rtn;
    },
};