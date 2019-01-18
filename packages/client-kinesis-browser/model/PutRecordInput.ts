import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {PutRecordInput as PutRecordInput_Type} from '../types/PutRecordInput';

export const PutRecordInput: _OperationInputShapeModel_<PutRecordInput_Type, any> = {
    serialize: (data: PutRecordInput_Type): any => {
    		if (!data.StreamName||!data.Data||!data.PartitionKey) {
        throw new Error('PutRecordInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.Data) rtn.Data = data.Data;

    if (data.PartitionKey) rtn.PartitionKey = data.PartitionKey;

    if (data.ExplicitHashKey) rtn.ExplicitHashKey = data.ExplicitHashKey;

    if (data.SequenceNumberForOrdering) rtn.SequenceNumberForOrdering = data.SequenceNumberForOrdering;

        return rtn;
    },
};