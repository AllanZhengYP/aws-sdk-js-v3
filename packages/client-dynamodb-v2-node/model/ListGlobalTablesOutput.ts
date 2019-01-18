import {_GlobalTableList} from './_GlobalTableList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ListGlobalTablesOutput as ListGlobalTablesOutput_Type} from '../types/ListGlobalTablesOutput';

export const ListGlobalTablesOutput: _OperationOutputShapeModel_<ListGlobalTablesOutput_Type, any> = {
    parse: (data: any): ListGlobalTablesOutput_Type => {
        let rtn: any = {};
        if (data.GlobalTables) rtn.GlobalTables = _GlobalTableList.parse!(data.GlobalTables);
    if (data.LastEvaluatedGlobalTableName) rtn.LastEvaluatedGlobalTableName = data.LastEvaluatedGlobalTableName;
        return rtn as ListGlobalTablesOutput_Type;
    },
};