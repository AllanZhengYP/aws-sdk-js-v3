import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeBackupInput as DescribeBackupInput_Type} from '../types/DescribeBackupInput';

export const DescribeBackupInput: _OperationInputShapeModel_<DescribeBackupInput_Type, any> = {
    serialize: (data: DescribeBackupInput_Type): any => {
    		if (!data.BackupArn) {
        throw new Error('DescribeBackupInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.BackupArn) rtn.BackupArn = data.BackupArn;

        return rtn;
    },
};