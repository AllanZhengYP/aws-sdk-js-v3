import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListGlobalTablesInput as ListGlobalTablesInput_Type} from '../types/ListGlobalTablesInput';

export const ListGlobalTablesInput: _OperationInputShapeModel_<ListGlobalTablesInput_Type, any> = {
    serialize: (data: ListGlobalTablesInput_Type): any => {
        let rtn: any = {};
        if (data.ExclusiveStartGlobalTableName) rtn.ExclusiveStartGlobalTableName = data.ExclusiveStartGlobalTableName;

    if (data.Limit) rtn.Limit = data.Limit;

    if (data.RegionName) rtn.RegionName = data.RegionName;

        return rtn;
    },
};