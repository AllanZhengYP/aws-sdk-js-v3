import {_BackupSummaries} from './_BackupSummaries';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ListBackupsOutput as ListBackupsOutput_Type} from '../types/ListBackupsOutput';

export const ListBackupsOutput: _OperationOutputShapeModel_<ListBackupsOutput_Type, any> = {
    parse: (data: any): ListBackupsOutput_Type => {
        let rtn: any = {};
        if (data.BackupSummaries) rtn.BackupSummaries = _BackupSummaries.parse!(data.BackupSummaries);
    if (data.LastEvaluatedBackupArn) rtn.LastEvaluatedBackupArn = data.LastEvaluatedBackupArn;
        return rtn as ListBackupsOutput_Type;
    },
};