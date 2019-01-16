import {_TableNameList} from './_TableNameList';
import {ListTablesOutput as ListTablesOutput_Type} from '../types/ListTablesOutput'
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';

export const ListTablesOutput: _OperationOutputShapeModel_<ListTablesOutput_Type, any> = {
    parse: (data: any): ListTablesOutput_Type => {
        let rtn: any = {};
        if (data.TableNames) rtn.TableNames = _TableNameList.parse!(data.TableNames);
        if (data.LastEvaluatedTableName) rtn.LastEvaluatedTableName = data.LastEvaluatedTableName;
        return rtn as ListTablesOutput_Type;
    },
};