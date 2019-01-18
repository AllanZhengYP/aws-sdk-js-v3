import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_BackupSummary as _BackupSummary_Type} from '../types/_BackupSummary';

export const _BackupSummary: _StructureModel_<_BackupSummary_Type, any> = {
    parse: (data: any): _BackupSummary_Type => {
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;
    if (data.TableId) rtn.TableId = data.TableId;
    if (data.TableArn) rtn.TableArn = data.TableArn;
    if (data.BackupArn) rtn.BackupArn = data.BackupArn;
    if (data.BackupName) rtn.BackupName = data.BackupName;
    if (data.BackupCreationDateTime) rtn.BackupCreationDateTime = _toDate_(data.BackupCreationDateTime);
    if (data.BackupExpiryDateTime) rtn.BackupExpiryDateTime = _toDate_(data.BackupExpiryDateTime);
    if (data.BackupStatus) rtn.BackupStatus = data.BackupStatus;
    if (data.BackupType) rtn.BackupType = data.BackupType;
    if (data.BackupSizeBytes) rtn.BackupSizeBytes = data.BackupSizeBytes;
        return rtn as _BackupSummary_Type;
    },
    serialize: (data: _BackupSummary_Type): any => {
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.TableId) rtn.TableId = data.TableId;

    if (data.TableArn) rtn.TableArn = data.TableArn;

    if (data.BackupArn) rtn.BackupArn = data.BackupArn;

    if (data.BackupName) rtn.BackupName = data.BackupName;

    if (data.BackupCreationDateTime) rtn.BackupCreationDateTime = _toDate_(data.BackupCreationDateTime);

    if (data.BackupExpiryDateTime) rtn.BackupExpiryDateTime = _toDate_(data.BackupExpiryDateTime);

    if (data.BackupStatus) rtn.BackupStatus = data.BackupStatus;

    if (data.BackupType) rtn.BackupType = data.BackupType;

    if (data.BackupSizeBytes) rtn.BackupSizeBytes = data.BackupSizeBytes;

        return rtn;
    },
};