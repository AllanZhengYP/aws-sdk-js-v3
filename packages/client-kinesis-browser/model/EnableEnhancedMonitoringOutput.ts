import {_MetricsNameList} from './_MetricsNameList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {EnableEnhancedMonitoringOutput as EnableEnhancedMonitoringOutput_Type} from '../types/EnableEnhancedMonitoringOutput';

export const EnableEnhancedMonitoringOutput: _OperationOutputShapeModel_<EnableEnhancedMonitoringOutput_Type, any> = {
    parse: (data: any): EnableEnhancedMonitoringOutput_Type => {
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;
    if (data.CurrentShardLevelMetrics) rtn.CurrentShardLevelMetrics = _MetricsNameList.parse!(data.CurrentShardLevelMetrics);
    if (data.DesiredShardLevelMetrics) rtn.DesiredShardLevelMetrics = _MetricsNameList.parse!(data.DesiredShardLevelMetrics);
        return rtn as EnableEnhancedMonitoringOutput_Type;
    },
};