import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListStreamConsumersInput as ListStreamConsumersInput_Type} from '../types/ListStreamConsumersInput';

export const ListStreamConsumersInput: _OperationInputShapeModel_<ListStreamConsumersInput_Type, any> = {
    serialize: (data: ListStreamConsumersInput_Type): any => {
    		if (!data.StreamARN) {
        throw new Error('ListStreamConsumersInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamARN) rtn.StreamARN = data.StreamARN;

    if (data.NextToken) rtn.NextToken = data.NextToken;

    if (data.MaxResults) rtn.MaxResults = data.MaxResults;

    if (data.StreamCreationTimestamp) rtn.StreamCreationTimestamp = _toDate_(data.StreamCreationTimestamp);

        return rtn;
    },
};