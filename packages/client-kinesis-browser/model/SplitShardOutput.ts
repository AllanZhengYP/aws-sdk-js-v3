import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {SplitShardOutput as SplitShardOutput_Type} from '../types/SplitShardOutput';

export const SplitShardOutput: _OperationOutputShapeModel_<SplitShardOutput_Type, any> = {
    parse: (data: any): SplitShardOutput_Type => {
        let rtn: any = {};

        return rtn as SplitShardOutput_Type;
    },
};