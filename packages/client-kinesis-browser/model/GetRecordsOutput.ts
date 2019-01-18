import {_RecordList} from './_RecordList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {GetRecordsOutput as GetRecordsOutput_Type} from '../types/GetRecordsOutput';

export const GetRecordsOutput: _OperationOutputShapeModel_<GetRecordsOutput_Type, any> = {
    parse: (data: any): GetRecordsOutput_Type => {
        let rtn: any = {};
        if (data.Records) rtn.Records = _RecordList.parse!(data.Records);
    if (data.NextShardIterator) rtn.NextShardIterator = data.NextShardIterator;
    if (data.MillisBehindLatest) rtn.MillisBehindLatest = data.MillisBehindLatest;
        return rtn as GetRecordsOutput_Type;
    },
};