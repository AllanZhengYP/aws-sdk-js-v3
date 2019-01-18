import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {GlobalTableAlreadyExistsException as GlobalTableAlreadyExistsException_Type} from '../types/GlobalTableAlreadyExistsException';

export const GlobalTableAlreadyExistsException: _StructureModel_<GlobalTableAlreadyExistsException_Type, any> = {
    parse: (data: any): GlobalTableAlreadyExistsException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as GlobalTableAlreadyExistsException_Type;
    },
    serialize: (data: GlobalTableAlreadyExistsException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};