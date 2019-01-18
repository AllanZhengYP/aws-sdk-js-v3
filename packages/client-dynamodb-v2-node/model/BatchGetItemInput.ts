import {_BatchGetRequestMap} from './_BatchGetRequestMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {BatchGetItemInput as BatchGetItemInput_Type} from '../types/BatchGetItemInput';

export const BatchGetItemInput: _OperationInputShapeModel_<BatchGetItemInput_Type, any> = {
    serialize: (data: BatchGetItemInput_Type): any => {
    		if (!data.RequestItems) {
        throw new Error('BatchGetItemInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.RequestItems) rtn.RequestItems = _BatchGetRequestMap.serialize!(data.RequestItems as any);

    if (data.ReturnConsumedCapacity) rtn.ReturnConsumedCapacity = data.ReturnConsumedCapacity;

        return rtn;
    },
};