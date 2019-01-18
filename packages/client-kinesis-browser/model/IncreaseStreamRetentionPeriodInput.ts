import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {IncreaseStreamRetentionPeriodInput as IncreaseStreamRetentionPeriodInput_Type} from '../types/IncreaseStreamRetentionPeriodInput';

export const IncreaseStreamRetentionPeriodInput: _OperationInputShapeModel_<IncreaseStreamRetentionPeriodInput_Type, any> = {
    serialize: (data: IncreaseStreamRetentionPeriodInput_Type): any => {
    		if (!data.StreamName||!data.RetentionPeriodHours) {
        throw new Error('IncreaseStreamRetentionPeriodInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.RetentionPeriodHours) rtn.RetentionPeriodHours = data.RetentionPeriodHours;

        return rtn;
    },
};