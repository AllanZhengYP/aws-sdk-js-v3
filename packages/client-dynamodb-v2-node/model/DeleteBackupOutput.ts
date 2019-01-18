import {_BackupDescription} from './_BackupDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DeleteBackupOutput as DeleteBackupOutput_Type} from '../types/DeleteBackupOutput';

export const DeleteBackupOutput: _OperationOutputShapeModel_<DeleteBackupOutput_Type, any> = {
    parse: (data: any): DeleteBackupOutput_Type => {
        let rtn: any = {};
        if (data.BackupDescription) rtn.BackupDescription = _BackupDescription.parse!(data.BackupDescription);
        return rtn as DeleteBackupOutput_Type;
    },
};