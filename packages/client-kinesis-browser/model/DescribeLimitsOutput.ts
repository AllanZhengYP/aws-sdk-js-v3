import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeLimitsOutput as DescribeLimitsOutput_Type} from '../types/DescribeLimitsOutput';

export const DescribeLimitsOutput: _OperationOutputShapeModel_<DescribeLimitsOutput_Type, any> = {
    parse: (data: any): DescribeLimitsOutput_Type => {
        let rtn: any = {};
        if (data.ShardLimit) rtn.ShardLimit = data.ShardLimit;
    if (data.OpenShardCount) rtn.OpenShardCount = data.OpenShardCount;
        return rtn as DescribeLimitsOutput_Type;
    },
};