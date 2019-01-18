import {_EnhancedMonitoringList} from './_EnhancedMonitoringList';
import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_StreamDescriptionSummary as _StreamDescriptionSummary_Type} from '../types/_StreamDescriptionSummary';

export const _StreamDescriptionSummary: _StructureModel_<_StreamDescriptionSummary_Type, any> = {
    parse: (data: any): _StreamDescriptionSummary_Type => {
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;
    if (data.StreamARN) rtn.StreamARN = data.StreamARN;
    if (data.StreamStatus) rtn.StreamStatus = data.StreamStatus;
    if (data.RetentionPeriodHours) rtn.RetentionPeriodHours = data.RetentionPeriodHours;
    if (data.StreamCreationTimestamp) rtn.StreamCreationTimestamp = _toDate_(data.StreamCreationTimestamp);
    if (data.EnhancedMonitoring) rtn.EnhancedMonitoring = _EnhancedMonitoringList.parse!(data.EnhancedMonitoring);
    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;
    if (data.KeyId) rtn.KeyId = data.KeyId;
    if (data.OpenShardCount) rtn.OpenShardCount = data.OpenShardCount;
    if (data.ConsumerCount) rtn.ConsumerCount = data.ConsumerCount;
        return rtn as _StreamDescriptionSummary_Type;
    },
    serialize: (data: _StreamDescriptionSummary_Type): any => {
    		if (!data.StreamName||!data.StreamARN||!data.StreamStatus||!data.RetentionPeriodHours||!data.StreamCreationTimestamp||!data.EnhancedMonitoring||!data.OpenShardCount) {
        throw new Error('_StreamDescriptionSummary has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.StreamARN) rtn.StreamARN = data.StreamARN;

    if (data.StreamStatus) rtn.StreamStatus = data.StreamStatus;

    if (data.RetentionPeriodHours) rtn.RetentionPeriodHours = data.RetentionPeriodHours;

    if (data.StreamCreationTimestamp) rtn.StreamCreationTimestamp = _toDate_(data.StreamCreationTimestamp);

    if (data.EnhancedMonitoring) rtn.EnhancedMonitoring = _EnhancedMonitoringList.serialize!(data.EnhancedMonitoring as any);

    if (data.EncryptionType) rtn.EncryptionType = data.EncryptionType;

    if (data.KeyId) rtn.KeyId = data.KeyId;

    if (data.OpenShardCount) rtn.OpenShardCount = data.OpenShardCount;

    if (data.ConsumerCount) rtn.ConsumerCount = data.ConsumerCount;

        return rtn;
    },
};