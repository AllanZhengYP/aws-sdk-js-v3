import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {UpdateShardCountInput as UpdateShardCountInput_Type} from '../types/UpdateShardCountInput';

export const UpdateShardCountInput: _OperationInputShapeModel_<UpdateShardCountInput_Type, any> = {
    serialize: (data: UpdateShardCountInput_Type): any => {
    		if (!data.StreamName||!data.TargetShardCount||!data.ScalingType) {
        throw new Error('UpdateShardCountInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.TargetShardCount) rtn.TargetShardCount = data.TargetShardCount;

    if (data.ScalingType) rtn.ScalingType = data.ScalingType;

        return rtn;
    },
};