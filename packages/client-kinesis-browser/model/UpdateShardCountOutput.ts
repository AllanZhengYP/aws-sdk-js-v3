import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {UpdateShardCountOutput as UpdateShardCountOutput_Type} from '../types/UpdateShardCountOutput';

export const UpdateShardCountOutput: _OperationOutputShapeModel_<UpdateShardCountOutput_Type, any> = {
    parse: (data: any): UpdateShardCountOutput_Type => {
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;
    if (data.CurrentShardCount) rtn.CurrentShardCount = data.CurrentShardCount;
    if (data.TargetShardCount) rtn.TargetShardCount = data.TargetShardCount;
        return rtn as UpdateShardCountOutput_Type;
    },
};