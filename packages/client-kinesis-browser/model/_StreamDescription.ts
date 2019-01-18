import {_ShardList} from './_ShardList';
import {_EnhancedMonitoringList} from './_EnhancedMonitoringList';
import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_StreamDescription as _StreamDescription_Type} from '../types/_StreamDescription';

export const _StreamDescription: _StructureModel_<_StreamDescription_Type, any> = {
    parse: (data: any): _StreamDescription_Type => {
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;
    if (data.StreamARN) rtn.StreamARN = data.StreamARN;
    if (data.StreamStatus) rtn.StreamStatus = data.StreamStatus;
    if (data.Shards) rtn.Shards = _ShardList.parse!(data.Shards);
    if (data.HasMoreShards) rtn.HasMoreShards = data.HasMoreShards;
    if (data.RetentionPeriodHours) rtn.RetentionPeriodHours = data.RetentionPeriodHours;
    if (data.StreamCreationTimestamp) rtn.StreamCreationTimestamp = _toDate_(data.StreamCreationTimestamp);
    if (data.EnhancedMonitoring) rtn.EnhancedMonitoring = _EnhancedMonitoringList.parse!(data.EnhancedMonitoring);
    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;
    if (data.KeyId) rtn.KeyId = data.KeyId;
        return rtn as _StreamDescription_Type;
    },
    serialize: (data: _StreamDescription_Type): any => {
    		if (!data.StreamName||!data.StreamARN||!data.StreamStatus||!data.Shards||!data.HasMoreShards||!data.RetentionPeriodHours||!data.StreamCreationTimestamp||!data.EnhancedMonitoring) {
        throw new Error('_StreamDescription has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.StreamARN) rtn.StreamARN = data.StreamARN;

    if (data.StreamStatus) rtn.StreamStatus = data.StreamStatus;

    if (data.Shards) rtn.Shards = _ShardList.serialize!(data.Shards as any);

    if (data.HasMoreShards) rtn.HasMoreShards = data.HasMoreShards;

    if (data.RetentionPeriodHours) rtn.RetentionPeriodHours = data.RetentionPeriodHours;

    if (data.StreamCreationTimestamp) rtn.StreamCreationTimestamp = _toDate_(data.StreamCreationTimestamp);

    if (data.EnhancedMonitoring) rtn.EnhancedMonitoring = _EnhancedMonitoringList.serialize!(data.EnhancedMonitoring as any);

    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;

    if (data.KeyId) rtn.KeyId = data.KeyId;

        return rtn;
    },
};