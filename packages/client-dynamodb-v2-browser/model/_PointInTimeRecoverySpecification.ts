import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_PointInTimeRecoverySpecification as _PointInTimeRecoverySpecification_Type} from '../types/_PointInTimeRecoverySpecification';

export const _PointInTimeRecoverySpecification: _StructureModel_<_PointInTimeRecoverySpecification_Type, any> = {
    parse: (data: any): _PointInTimeRecoverySpecification_Type => {
        let rtn: any = {};
        if (data.PointInTimeRecoveryEnabled) rtn.PointInTimeRecoveryEnabled = data.PointInTimeRecoveryEnabled;
        return rtn as _PointInTimeRecoverySpecification_Type;
    },
    serialize: (data: _PointInTimeRecoverySpecification_Type): any => {
    		if (!data.PointInTimeRecoveryEnabled) {
        throw new Error('_PointInTimeRecoverySpecification has missing required parameter');
    }
        let rtn: any = {};
        if (data.PointInTimeRecoveryEnabled) rtn.PointInTimeRecoveryEnabled = data.PointInTimeRecoveryEnabled;

        return rtn;
    },
};