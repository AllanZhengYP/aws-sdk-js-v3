import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ExternalServiceException as ExternalServiceException_Type} from '../types/ExternalServiceException';

export const ExternalServiceException: _StructureModel_<ExternalServiceException_Type, any> = {
    parse: (data: any): ExternalServiceException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ExternalServiceException_Type;
    },
    serialize: (data: ExternalServiceException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};