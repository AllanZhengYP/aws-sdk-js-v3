import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DecreaseStreamRetentionPeriodInput as DecreaseStreamRetentionPeriodInput_Type} from '../types/DecreaseStreamRetentionPeriodInput';

export const DecreaseStreamRetentionPeriodInput: _OperationInputShapeModel_<DecreaseStreamRetentionPeriodInput_Type, any> = {
    serialize: (data: DecreaseStreamRetentionPeriodInput_Type): any => {
    		if (!data.StreamName||!data.RetentionPeriodHours) {
        throw new Error('DecreaseStreamRetentionPeriodInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.RetentionPeriodHours) rtn.RetentionPeriodHours = data.RetentionPeriodHours;

        return rtn;
    },
};