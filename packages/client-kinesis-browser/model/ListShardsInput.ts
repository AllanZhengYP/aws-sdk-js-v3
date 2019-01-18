import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListShardsInput as ListShardsInput_Type} from '../types/ListShardsInput';

export const ListShardsInput: _OperationInputShapeModel_<ListShardsInput_Type, any> = {
    serialize: (data: ListShardsInput_Type): any => {
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.NextToken) rtn.NextToken = data.NextToken;

    if (data.ExclusiveStartShardId) rtn.ExclusiveStartShardId = data.ExclusiveStartShardId;

    if (data.MaxResults) rtn.MaxResults = data.MaxResults;

    if (data.StreamCreationTimestamp) rtn.StreamCreationTimestamp = _toDate_(data.StreamCreationTimestamp);

        return rtn;
    },
};