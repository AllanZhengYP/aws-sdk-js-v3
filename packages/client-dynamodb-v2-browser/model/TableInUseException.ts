import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {TableInUseException as TableInUseException_Type} from '../types/TableInUseException';

export const TableInUseException: _StructureModel_<TableInUseException_Type, any> = {
    parse: (data: any): TableInUseException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as TableInUseException_Type;
    },
    serialize: (data: TableInUseException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};