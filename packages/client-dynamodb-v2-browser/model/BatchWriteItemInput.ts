import {_BatchWriteItemRequestMap} from './_BatchWriteItemRequestMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {BatchWriteItemInput as BatchWriteItemInput_Type} from '../types/BatchWriteItemInput';

export const BatchWriteItemInput: _OperationInputShapeModel_<BatchWriteItemInput_Type, any> = {
    serialize: (data: BatchWriteItemInput_Type): any => {
    		if (!data.RequestItems) {
        throw new Error('BatchWriteItemInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.RequestItems) rtn.RequestItems = _BatchWriteItemRequestMap.serialize!(data.RequestItems as any);

    if (data.ReturnConsumedCapacity) rtn.ReturnConsumedCapacity = data.ReturnConsumedCapacity;

    if (data.ReturnItemCollectionMetrics) rtn.ReturnItemCollectionMetrics = data.ReturnItemCollectionMetrics;

        return rtn;
    },
};