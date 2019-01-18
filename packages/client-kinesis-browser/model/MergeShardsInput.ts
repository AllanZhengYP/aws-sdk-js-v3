import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {MergeShardsInput as MergeShardsInput_Type} from '../types/MergeShardsInput';

export const MergeShardsInput: _OperationInputShapeModel_<MergeShardsInput_Type, any> = {
    serialize: (data: MergeShardsInput_Type): any => {
    		if (!data.StreamName||!data.ShardToMerge||!data.AdjacentShardToMerge) {
        throw new Error('MergeShardsInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.ShardToMerge) rtn.ShardToMerge = data.ShardToMerge;

    if (data.AdjacentShardToMerge) rtn.AdjacentShardToMerge = data.AdjacentShardToMerge;

        return rtn;
    },
};