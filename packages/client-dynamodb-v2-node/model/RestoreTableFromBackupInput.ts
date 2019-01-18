import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {RestoreTableFromBackupInput as RestoreTableFromBackupInput_Type} from '../types/RestoreTableFromBackupInput';

export const RestoreTableFromBackupInput: _OperationInputShapeModel_<RestoreTableFromBackupInput_Type, any> = {
    serialize: (data: RestoreTableFromBackupInput_Type): any => {
    		if (!data.TargetTableName||!data.BackupArn) {
        throw new Error('RestoreTableFromBackupInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TargetTableName) rtn.TargetTableName = data.TargetTableName;

    if (data.BackupArn) rtn.BackupArn = data.BackupArn;

        return rtn;
    },
};