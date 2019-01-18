import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DeleteBackupInput as DeleteBackupInput_Type} from '../types/DeleteBackupInput';

export const DeleteBackupInput: _OperationInputShapeModel_<DeleteBackupInput_Type, any> = {
    serialize: (data: DeleteBackupInput_Type): any => {
    		if (!data.BackupArn) {
        throw new Error('DeleteBackupInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.BackupArn) rtn.BackupArn = data.BackupArn;

        return rtn;
    },
};