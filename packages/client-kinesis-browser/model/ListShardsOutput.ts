import {_ShardList} from './_ShardList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ListShardsOutput as ListShardsOutput_Type} from '../types/ListShardsOutput';

export const ListShardsOutput: _OperationOutputShapeModel_<ListShardsOutput_Type, any> = {
    parse: (data: any): ListShardsOutput_Type => {
        let rtn: any = {};
        if (data.Shards) rtn.Shards = _ShardList.parse!(data.Shards);
    if (data.NextToken) rtn.NextToken = data.NextToken;
        return rtn as ListShardsOutput_Type;
    },
};