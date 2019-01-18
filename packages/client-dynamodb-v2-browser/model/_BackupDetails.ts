import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_BackupDetails as _BackupDetails_Type} from '../types/_BackupDetails';

export const _BackupDetails: _StructureModel_<_BackupDetails_Type, any> = {
    parse: (data: any): _BackupDetails_Type => {
        let rtn: any = {};
        if (data.BackupArn) rtn.BackupArn = data.BackupArn;
    if (data.BackupName) rtn.BackupName = data.BackupName;
    if (data.BackupSizeBytes) rtn.BackupSizeBytes = data.BackupSizeBytes;
    if (data.BackupStatus) rtn.BackupStatus = data.BackupStatus;
    if (data.BackupType) rtn.BackupType = data.BackupType;
    if (data.BackupCreationDateTime) rtn.BackupCreationDateTime = _toDate_(data.BackupCreationDateTime);
    if (data.BackupExpiryDateTime) rtn.BackupExpiryDateTime = _toDate_(data.BackupExpiryDateTime);
        return rtn as _BackupDetails_Type;
    },
    serialize: (data: _BackupDetails_Type): any => {
    		if (!data.BackupArn||!data.BackupName||!data.BackupStatus||!data.BackupType||!data.BackupCreationDateTime) {
        throw new Error('_BackupDetails has missing required parameter');
    }
        let rtn: any = {};
        if (data.BackupArn) rtn.BackupArn = data.BackupArn;

    if (data.BackupName) rtn.BackupName = data.BackupName;

    if (data.BackupSizeBytes) rtn.BackupSizeBytes = data.BackupSizeBytes;

    if (data.BackupStatus) rtn.BackupStatus = data.BackupStatus;

    if (data.BackupType) rtn.BackupType = data.BackupType;

    if (data.BackupCreationDateTime) rtn.BackupCreationDateTime = _toDate_(data.BackupCreationDateTime);

    if (data.BackupExpiryDateTime) rtn.BackupExpiryDateTime = _toDate_(data.BackupExpiryDateTime);

        return rtn;
    },
};