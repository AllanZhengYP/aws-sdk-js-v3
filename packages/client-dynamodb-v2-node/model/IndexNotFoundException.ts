import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {IndexNotFoundException as IndexNotFoundException_Type} from '../types/IndexNotFoundException';

export const IndexNotFoundException: _StructureModel_<IndexNotFoundException_Type, any> = {
    parse: (data: any): IndexNotFoundException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as IndexNotFoundException_Type;
    },
    serialize: (data: IndexNotFoundException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};