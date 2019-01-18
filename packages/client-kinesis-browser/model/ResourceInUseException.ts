import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ResourceInUseException as ResourceInUseException_Type} from '../types/ResourceInUseException';

export const ResourceInUseException: _StructureModel_<ResourceInUseException_Type, any> = {
    parse: (data: any): ResourceInUseException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ResourceInUseException_Type;
    },
    serialize: (data: ResourceInUseException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};