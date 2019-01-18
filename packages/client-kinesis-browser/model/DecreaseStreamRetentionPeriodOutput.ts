import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DecreaseStreamRetentionPeriodOutput as DecreaseStreamRetentionPeriodOutput_Type} from '../types/DecreaseStreamRetentionPeriodOutput';

export const DecreaseStreamRetentionPeriodOutput: _OperationOutputShapeModel_<DecreaseStreamRetentionPeriodOutput_Type, any> = {
    parse: (data: any): DecreaseStreamRetentionPeriodOutput_Type => {
        let rtn: any = {};

        return rtn as DecreaseStreamRetentionPeriodOutput_Type;
    },
};