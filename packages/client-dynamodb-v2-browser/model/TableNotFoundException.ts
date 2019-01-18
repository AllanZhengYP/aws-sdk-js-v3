import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {TableNotFoundException as TableNotFoundException_Type} from '../types/TableNotFoundException';

export const TableNotFoundException: _StructureModel_<TableNotFoundException_Type, any> = {
    parse: (data: any): TableNotFoundException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as TableNotFoundException_Type;
    },
    serialize: (data: TableNotFoundException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};