import {_BackupDetails} from './_BackupDetails';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {CreateBackupOutput as CreateBackupOutput_Type} from '../types/CreateBackupOutput';

export const CreateBackupOutput: _OperationOutputShapeModel_<CreateBackupOutput_Type, any> = {
    parse: (data: any): CreateBackupOutput_Type => {
        let rtn: any = {};
        if (data.BackupDetails) rtn.BackupDetails = _BackupDetails.parse!(data.BackupDetails);
        return rtn as CreateBackupOutput_Type;
    },
};