import {_AttributeMap} from './_AttributeMap';
import {_ConsumedCapacity} from './_ConsumedCapacity';
import {_ItemCollectionMetrics} from './_ItemCollectionMetrics';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DeleteItemOutput as DeleteItemOutput_Type} from '../types/DeleteItemOutput';

export const DeleteItemOutput: _OperationOutputShapeModel_<DeleteItemOutput_Type, any> = {
    parse: (data: any): DeleteItemOutput_Type => {
        let rtn: any = {};
        if (data.Attributes) rtn.Attributes = _AttributeMap.parse!(data.Attributes);
    if (data.ConsumedCapacity) rtn.ConsumedCapacity = _ConsumedCapacity.parse!(data.ConsumedCapacity);
    if (data.ItemCollectionMetrics) rtn.ItemCollectionMetrics = _ItemCollectionMetrics.parse!(data.ItemCollectionMetrics);
        return rtn as DeleteItemOutput_Type;
    },
};