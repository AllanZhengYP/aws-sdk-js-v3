import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Record as _Record_Type} from '../types/_Record';

export const _Record: _StructureModel_<_Record_Type, any> = {
    parse: (data: any): _Record_Type => {
        let rtn: any = {};
        if (data.SequenceNumber) rtn.SequenceNumber = data.SequenceNumber;
    if (data.ApproximateArrivalTimestamp) rtn.ApproximateArrivalTimestamp = _toDate_(data.ApproximateArrivalTimestamp);
    if (data.Data) rtn.Data = data.Data;
    if (data.PartitionKey) rtn.PartitionKey = data.PartitionKey;
    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;
        return rtn as _Record_Type;
    },
    serialize: (data: _Record_Type): any => {
    		if (!data.SequenceNumber||!data.Data||!data.PartitionKey) {
        throw new Error('_Record has missing required parameter');
    }
        let rtn: any = {};
        if (data.SequenceNumber) rtn.SequenceNumber = data.SequenceNumber;

    if (data.ApproximateArrivalTimestamp) rtn.ApproximateArrivalTimestamp = _toDate_(data.ApproximateArrivalTimestamp);

    if (data.Data) rtn.Data = data.Data;

    if (data.PartitionKey) rtn.PartitionKey = data.PartitionKey;

    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;

        return rtn;
    },
};