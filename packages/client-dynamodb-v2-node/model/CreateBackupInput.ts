import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {CreateBackupInput as CreateBackupInput_Type} from '../types/CreateBackupInput';

export const CreateBackupInput: _OperationInputShapeModel_<CreateBackupInput_Type, any> = {
    serialize: (data: CreateBackupInput_Type): any => {
    		if (!data.TableName||!data.BackupName) {
        throw new Error('CreateBackupInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.BackupName) rtn.BackupName = data.BackupName;

        return rtn;
    },
};