import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {IncreaseStreamRetentionPeriodOutput as IncreaseStreamRetentionPeriodOutput_Type} from '../types/IncreaseStreamRetentionPeriodOutput';

export const IncreaseStreamRetentionPeriodOutput: _OperationOutputShapeModel_<IncreaseStreamRetentionPeriodOutput_Type, any> = {
    parse: (data: any): IncreaseStreamRetentionPeriodOutput_Type => {
        let rtn: any = {};

        return rtn as IncreaseStreamRetentionPeriodOutput_Type;
    },
};