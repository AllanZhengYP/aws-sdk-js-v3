import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListTablesInput as ListTablesInput_Type} from '../types/ListTablesInput';

export const ListTablesInput: _OperationInputShapeModel_<ListTablesInput_Type, any> = {
    parse: (data: any): ListTablesInput_Type => {
        let rtn: any = {};
        if (data.ExclusiveStartTableName) rtn.ExclusiveStartTableName = data.ExclusiveStartTableName;
        if (data.Limit) rtn.Limit = data.Limit;
        return rtn as ListTablesInput_Type;
    },

    serialize: (input: ListTablesInput_Type): any => {
        let rtn: any = {};
        if (input.ExclusiveStartTableName) rtn.ExclusiveStartTableName = input.ExclusiveStartTableName;
        if (input.Limit) rtn.AttributeType = input.Limit;
        return rtn;
    }
};