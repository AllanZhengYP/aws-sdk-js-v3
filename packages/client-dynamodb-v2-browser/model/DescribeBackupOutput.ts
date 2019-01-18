import {_BackupDescription} from './_BackupDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeBackupOutput as DescribeBackupOutput_Type} from '../types/DescribeBackupOutput';

export const DescribeBackupOutput: _OperationOutputShapeModel_<DescribeBackupOutput_Type, any> = {
    parse: (data: any): DescribeBackupOutput_Type => {
        let rtn: any = {};
        if (data.BackupDescription) rtn.BackupDescription = _BackupDescription.parse!(data.BackupDescription);
        return rtn as DescribeBackupOutput_Type;
    },
};