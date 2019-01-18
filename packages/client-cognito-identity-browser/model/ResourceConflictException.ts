import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ResourceConflictException as ResourceConflictException_Type} from '../types/ResourceConflictException';

export const ResourceConflictException: _StructureModel_<ResourceConflictException_Type, any> = {
    parse: (data: any): ResourceConflictException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ResourceConflictException_Type;
    },
    serialize: (data: ResourceConflictException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};