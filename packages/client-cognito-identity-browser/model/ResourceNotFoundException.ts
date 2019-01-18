import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ResourceNotFoundException as ResourceNotFoundException_Type} from '../types/ResourceNotFoundException';

export const ResourceNotFoundException: _StructureModel_<ResourceNotFoundException_Type, any> = {
    parse: (data: any): ResourceNotFoundException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ResourceNotFoundException_Type;
    },
    serialize: (data: ResourceNotFoundException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};