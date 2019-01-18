import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {GetShardIteratorOutput as GetShardIteratorOutput_Type} from '../types/GetShardIteratorOutput';

export const GetShardIteratorOutput: _OperationOutputShapeModel_<GetShardIteratorOutput_Type, any> = {
    parse: (data: any): GetShardIteratorOutput_Type => {
        let rtn: any = {};
        if (data.ShardIterator) rtn.ShardIterator = data.ShardIterator;
        return rtn as GetShardIteratorOutput_Type;
    },
};