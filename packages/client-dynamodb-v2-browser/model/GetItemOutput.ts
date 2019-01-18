import {_AttributeMap} from './_AttributeMap';
import {_ConsumedCapacity} from './_ConsumedCapacity';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {GetItemOutput as GetItemOutput_Type} from '../types/GetItemOutput';

export const GetItemOutput: _OperationOutputShapeModel_<GetItemOutput_Type, any> = {
    parse: (data: any): GetItemOutput_Type => {
        let rtn: any = {};
        if (data.Item) rtn.Item = _AttributeMap.parse!(data.Item);
    if (data.ConsumedCapacity) rtn.ConsumedCapacity = _ConsumedCapacity.parse!(data.ConsumedCapacity);
        return rtn as GetItemOutput_Type;
    },
};