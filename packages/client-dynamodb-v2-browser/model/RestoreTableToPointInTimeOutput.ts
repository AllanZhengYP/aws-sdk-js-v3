import {_TableDescription} from './_TableDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {RestoreTableToPointInTimeOutput as RestoreTableToPointInTimeOutput_Type} from '../types/RestoreTableToPointInTimeOutput';

export const RestoreTableToPointInTimeOutput: _OperationOutputShapeModel_<RestoreTableToPointInTimeOutput_Type, any> = {
    parse: (data: any): RestoreTableToPointInTimeOutput_Type => {
        let rtn: any = {};
        if (data.TableDescription) rtn.TableDescription = _TableDescription.parse!(data.TableDescription);
        return rtn as RestoreTableToPointInTimeOutput_Type;
    },
};