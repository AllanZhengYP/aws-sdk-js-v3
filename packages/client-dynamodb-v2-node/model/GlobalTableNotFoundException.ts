import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {GlobalTableNotFoundException as GlobalTableNotFoundException_Type} from '../types/GlobalTableNotFoundException';

export const GlobalTableNotFoundException: _StructureModel_<GlobalTableNotFoundException_Type, any> = {
    parse: (data: any): GlobalTableNotFoundException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as GlobalTableNotFoundException_Type;
    },
    serialize: (data: GlobalTableNotFoundException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};