import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {TableAlreadyExistsException as TableAlreadyExistsException_Type} from '../types/TableAlreadyExistsException';

export const TableAlreadyExistsException: _StructureModel_<TableAlreadyExistsException_Type, any> = {
    parse: (data: any): TableAlreadyExistsException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as TableAlreadyExistsException_Type;
    },
    serialize: (data: TableAlreadyExistsException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};