import {_ItemList} from './_ItemList';
import {_Key} from './_Key';
import {_ConsumedCapacity} from './_ConsumedCapacity';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ScanOutput as ScanOutput_Type} from '../types/ScanOutput';

export const ScanOutput: _OperationOutputShapeModel_<ScanOutput_Type, any> = {
    parse: (data: any): ScanOutput_Type => {
        let rtn: any = {};
        if (data.Items) rtn.Items = _ItemList.parse!(data.Items);
    if (data.Count) rtn.Count = data.Count;
    if (data.ScannedCount) rtn.ScannedCount = data.ScannedCount;
    if (data.LastEvaluatedKey) rtn.LastEvaluatedKey = _Key.parse!(data.LastEvaluatedKey);
    if (data.ConsumedCapacity) rtn.ConsumedCapacity = _ConsumedCapacity.parse!(data.ConsumedCapacity);
        return rtn as ScanOutput_Type;
    },
};