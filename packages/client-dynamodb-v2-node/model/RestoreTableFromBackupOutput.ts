import {_TableDescription} from './_TableDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {RestoreTableFromBackupOutput as RestoreTableFromBackupOutput_Type} from '../types/RestoreTableFromBackupOutput';

export const RestoreTableFromBackupOutput: _OperationOutputShapeModel_<RestoreTableFromBackupOutput_Type, any> = {
    parse: (data: any): RestoreTableFromBackupOutput_Type => {
        let rtn: any = {};
        if (data.TableDescription) rtn.TableDescription = _TableDescription.parse!(data.TableDescription);
        return rtn as RestoreTableFromBackupOutput_Type;
    },
};