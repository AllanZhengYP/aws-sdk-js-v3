import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {SplitShardInput as SplitShardInput_Type} from '../types/SplitShardInput';

export const SplitShardInput: _OperationInputShapeModel_<SplitShardInput_Type, any> = {
    serialize: (data: SplitShardInput_Type): any => {
    		if (!data.StreamName||!data.ShardToSplit||!data.NewStartingHashKey) {
        throw new Error('SplitShardInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.ShardToSplit) rtn.ShardToSplit = data.ShardToSplit;

    if (data.NewStartingHashKey) rtn.NewStartingHashKey = data.NewStartingHashKey;

        return rtn;
    },
};