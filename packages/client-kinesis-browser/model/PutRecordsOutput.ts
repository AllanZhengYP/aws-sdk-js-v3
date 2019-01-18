import {_PutRecordsResultEntryList} from './_PutRecordsResultEntryList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {PutRecordsOutput as PutRecordsOutput_Type} from '../types/PutRecordsOutput';

export const PutRecordsOutput: _OperationOutputShapeModel_<PutRecordsOutput_Type, any> = {
    parse: (data: any): PutRecordsOutput_Type => {
        let rtn: any = {};
        if (data.FailedRecordCount) rtn.FailedRecordCount = data.FailedRecordCount;
    if (data.Records) rtn.Records = _PutRecordsResultEntryList.parse!(data.Records);
    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;
        return rtn as PutRecordsOutput_Type;
    },
};