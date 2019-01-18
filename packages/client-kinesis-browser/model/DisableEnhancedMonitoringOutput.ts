import {_MetricsNameList} from './_MetricsNameList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DisableEnhancedMonitoringOutput as DisableEnhancedMonitoringOutput_Type} from '../types/DisableEnhancedMonitoringOutput';

export const DisableEnhancedMonitoringOutput: _OperationOutputShapeModel_<DisableEnhancedMonitoringOutput_Type, any> = {
    parse: (data: any): DisableEnhancedMonitoringOutput_Type => {
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;
    if (data.CurrentShardLevelMetrics) rtn.CurrentShardLevelMetrics = _MetricsNameList.parse!(data.CurrentShardLevelMetrics);
    if (data.DesiredShardLevelMetrics) rtn.DesiredShardLevelMetrics = _MetricsNameList.parse!(data.DesiredShardLevelMetrics);
        return rtn as DisableEnhancedMonitoringOutput_Type;
    },
};