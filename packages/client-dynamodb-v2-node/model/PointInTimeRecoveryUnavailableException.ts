import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {PointInTimeRecoveryUnavailableException as PointInTimeRecoveryUnavailableException_Type} from '../types/PointInTimeRecoveryUnavailableException';

export const PointInTimeRecoveryUnavailableException: _StructureModel_<PointInTimeRecoveryUnavailableException_Type, any> = {
    parse: (data: any): PointInTimeRecoveryUnavailableException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as PointInTimeRecoveryUnavailableException_Type;
    },
    serialize: (data: PointInTimeRecoveryUnavailableException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};