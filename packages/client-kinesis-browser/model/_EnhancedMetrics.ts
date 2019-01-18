import {_MetricsNameList} from './_MetricsNameList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_EnhancedMetrics as _EnhancedMetrics_Type} from '../types/_EnhancedMetrics';

export const _EnhancedMetrics: _StructureModel_<_EnhancedMetrics_Type, any> = {
    parse: (data: any): _EnhancedMetrics_Type => {
        let rtn: any = {};
        if (data.ShardLevelMetrics) rtn.ShardLevelMetrics = _MetricsNameList.parse!(data.ShardLevelMetrics);
        return rtn as _EnhancedMetrics_Type;
    },
    serialize: (data: _EnhancedMetrics_Type): any => {
        let rtn: any = {};
        if (data.ShardLevelMetrics) rtn.ShardLevelMetrics = _MetricsNameList.serialize!(data.ShardLevelMetrics as any);

        return rtn;
    },
};