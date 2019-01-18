import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_RestoreSummary as _RestoreSummary_Type} from '../types/_RestoreSummary';

export const _RestoreSummary: _StructureModel_<_RestoreSummary_Type, any> = {
    parse: (data: any): _RestoreSummary_Type => {
        let rtn: any = {};
        if (data.SourceBackupArn) rtn.SourceBackupArn = data.SourceBackupArn;
    if (data.SourceTableArn) rtn.SourceTableArn = data.SourceTableArn;
    if (data.RestoreDateTime) rtn.RestoreDateTime = _toDate_(data.RestoreDateTime);
    if (data.RestoreInProgress) rtn.RestoreInProgress = data.RestoreInProgress;
        return rtn as _RestoreSummary_Type;
    },
    serialize: (data: _RestoreSummary_Type): any => {
    		if (!data.RestoreDateTime||!data.RestoreInProgress) {
        throw new Error('_RestoreSummary has missing required parameter');
    }
        let rtn: any = {};
        if (data.SourceBackupArn) rtn.SourceBackupArn = data.SourceBackupArn;

    if (data.SourceTableArn) rtn.SourceTableArn = data.SourceTableArn;

    if (data.RestoreDateTime) rtn.RestoreDateTime = _toDate_(data.RestoreDateTime);

    if (data.RestoreInProgress) rtn.RestoreInProgress = data.RestoreInProgress;

        return rtn;
    },
};