import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {RestoreTableToPointInTimeInput as RestoreTableToPointInTimeInput_Type} from '../types/RestoreTableToPointInTimeInput';

export const RestoreTableToPointInTimeInput: _OperationInputShapeModel_<RestoreTableToPointInTimeInput_Type, any> = {
    serialize: (data: RestoreTableToPointInTimeInput_Type): any => {
    		if (!data.SourceTableName||!data.TargetTableName) {
        throw new Error('RestoreTableToPointInTimeInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.SourceTableName) rtn.SourceTableName = data.SourceTableName;

    if (data.TargetTableName) rtn.TargetTableName = data.TargetTableName;

    if (data.UseLatestRestorableTime) rtn.UseLatestRestorableTime = data.UseLatestRestorableTime;

    if (data.RestoreDateTime) rtn.RestoreDateTime = _toDate_(data.RestoreDateTime);

        return rtn;
    },
};