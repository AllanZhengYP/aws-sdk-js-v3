import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_PutRecordsResultEntry as _PutRecordsResultEntry_Type} from '../types/_PutRecordsResultEntry';

export const _PutRecordsResultEntry: _StructureModel_<_PutRecordsResultEntry_Type, any> = {
    parse: (data: any): _PutRecordsResultEntry_Type => {
        let rtn: any = {};
        if (data.SequenceNumber) rtn.SequenceNumber = data.SequenceNumber;
    if (data.ShardId) rtn.ShardId = data.ShardId;
    if (data.ErrorCode) rtn.ErrorCode = data.ErrorCode;
    if (data.ErrorMessage) rtn.ErrorMessage = data.ErrorMessage;
        return rtn as _PutRecordsResultEntry_Type;
    },
    serialize: (data: _PutRecordsResultEntry_Type): any => {
        let rtn: any = {};
        if (data.SequenceNumber) rtn.SequenceNumber = data.SequenceNumber;

    if (data.ShardId) rtn.ShardId = data.ShardId;

    if (data.ErrorCode) rtn.ErrorCode = data.ErrorCode;

    if (data.ErrorMessage) rtn.ErrorMessage = data.ErrorMessage;

        return rtn;
    },
};