import {_BatchGetResponseMap} from './_BatchGetResponseMap';
import {_BatchGetRequestMap} from './_BatchGetRequestMap';
import {_ConsumedCapacityMultiple} from './_ConsumedCapacityMultiple';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {BatchGetItemOutput as BatchGetItemOutput_Type} from '../types/BatchGetItemOutput';

export const BatchGetItemOutput: _OperationOutputShapeModel_<BatchGetItemOutput_Type, any> = {
    parse: (data: any): BatchGetItemOutput_Type => {
        let rtn: any = {};
        if (data.Responses) rtn.Responses = _BatchGetResponseMap.parse!(data.Responses);
    if (data.UnprocessedKeys) rtn.UnprocessedKeys = _BatchGetRequestMap.parse!(data.UnprocessedKeys);
    if (data.ConsumedCapacity) rtn.ConsumedCapacity = _ConsumedCapacityMultiple.parse!(data.ConsumedCapacity);
        return rtn as BatchGetItemOutput_Type;
    },
};