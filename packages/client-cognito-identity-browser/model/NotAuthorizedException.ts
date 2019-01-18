import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {NotAuthorizedException as NotAuthorizedException_Type} from '../types/NotAuthorizedException';

export const NotAuthorizedException: _StructureModel_<NotAuthorizedException_Type, any> = {
    parse: (data: any): NotAuthorizedException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as NotAuthorizedException_Type;
    },
    serialize: (data: NotAuthorizedException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};