import {_BatchWriteItemRequestMap} from './_BatchWriteItemRequestMap';
import {_ItemCollectionMetricsPerTable} from './_ItemCollectionMetricsPerTable';
import {_ConsumedCapacityMultiple} from './_ConsumedCapacityMultiple';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {BatchWriteItemOutput as BatchWriteItemOutput_Type} from '../types/BatchWriteItemOutput';

export const BatchWriteItemOutput: _OperationOutputShapeModel_<BatchWriteItemOutput_Type, any> = {
    parse: (data: any): BatchWriteItemOutput_Type => {
        let rtn: any = {};
        if (data.UnprocessedItems) rtn.UnprocessedItems = _BatchWriteItemRequestMap.parse!(data.UnprocessedItems);
    if (data.ItemCollectionMetrics) rtn.ItemCollectionMetrics = _ItemCollectionMetricsPerTable.parse!(data.ItemCollectionMetrics);
    if (data.ConsumedCapacity) rtn.ConsumedCapacity = _ConsumedCapacityMultiple.parse!(data.ConsumedCapacity);
        return rtn as BatchWriteItemOutput_Type;
    },
};