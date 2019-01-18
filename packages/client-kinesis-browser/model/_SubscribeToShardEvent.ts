import {_RecordList} from './_RecordList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_SubscribeToShardEvent as _SubscribeToShardEvent_Type} from '../types/_SubscribeToShardEvent';

export const _SubscribeToShardEvent: _StructureModel_<_SubscribeToShardEvent_Type, any> = {
    parse: (data: any): _SubscribeToShardEvent_Type => {
        let rtn: any = {};
        if (data.Records) rtn.Records = _RecordList.parse!(data.Records);
    if (data.ContinuationSequenceNumber) rtn.ContinuationSequenceNumber = data.ContinuationSequenceNumber;
    if (data.MillisBehindLatest) rtn.MillisBehindLatest = data.MillisBehindLatest;
        return rtn as _SubscribeToShardEvent_Type;
    },
    serialize: (data: _SubscribeToShardEvent_Type): any => {
    		if (!data.Records||!data.ContinuationSequenceNumber||!data.MillisBehindLatest) {
        throw new Error('_SubscribeToShardEvent has missing required parameter');
    }
        let rtn: any = {};
        if (data.Records) rtn.Records = _RecordList.serialize!(data.Records as any);

    if (data.ContinuationSequenceNumber) rtn.ContinuationSequenceNumber = data.ContinuationSequenceNumber;

    if (data.MillisBehindLatest) rtn.MillisBehindLatest = data.MillisBehindLatest;

        return rtn;
    },
};