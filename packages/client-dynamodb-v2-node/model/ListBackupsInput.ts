import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListBackupsInput as ListBackupsInput_Type} from '../types/ListBackupsInput';

export const ListBackupsInput: _OperationInputShapeModel_<ListBackupsInput_Type, any> = {
    serialize: (data: ListBackupsInput_Type): any => {
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.Limit) rtn.Limit = data.Limit;

    if (data.TimeRangeLowerBound) rtn.TimeRangeLowerBound = _toDate_(data.TimeRangeLowerBound);

    if (data.TimeRangeUpperBound) rtn.TimeRangeUpperBound = _toDate_(data.TimeRangeUpperBound);

    if (data.ExclusiveStartBackupArn) rtn.ExclusiveStartBackupArn = data.ExclusiveStartBackupArn;

    if (data.BackupType) rtn.BackupType = data.BackupType;

        return rtn;
    },
};