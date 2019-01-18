import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {PutRecordOutput as PutRecordOutput_Type} from '../types/PutRecordOutput';

export const PutRecordOutput: _OperationOutputShapeModel_<PutRecordOutput_Type, any> = {
    parse: (data: any): PutRecordOutput_Type => {
        let rtn: any = {};
        if (data.ShardId) rtn.ShardId = data.ShardId;
    if (data.SequenceNumber) rtn.SequenceNumber = data.SequenceNumber;
    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;
        return rtn as PutRecordOutput_Type;
    },
};