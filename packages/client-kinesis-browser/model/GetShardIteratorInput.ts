import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {GetShardIteratorInput as GetShardIteratorInput_Type} from '../types/GetShardIteratorInput';

export const GetShardIteratorInput: _OperationInputShapeModel_<GetShardIteratorInput_Type, any> = {
    serialize: (data: GetShardIteratorInput_Type): any => {
    		if (!data.StreamName||!data.ShardId||!data.ShardIteratorType) {
        throw new Error('GetShardIteratorInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.ShardId) rtn.ShardId = data.ShardId;

    if (data.ShardIteratorType) rtn.ShardIteratorType = data.ShardIteratorType;

    if (data.StartingSequenceNumber) rtn.StartingSequenceNumber = data.StartingSequenceNumber;

    if (data.Timestamp) rtn.Timestamp = _toDate_(data.Timestamp);

        return rtn;
    },
};