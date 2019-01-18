import {_MetricsNameList} from './_MetricsNameList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DisableEnhancedMonitoringInput as DisableEnhancedMonitoringInput_Type} from '../types/DisableEnhancedMonitoringInput';

export const DisableEnhancedMonitoringInput: _OperationInputShapeModel_<DisableEnhancedMonitoringInput_Type, any> = {
    serialize: (data: DisableEnhancedMonitoringInput_Type): any => {
    		if (!data.StreamName||!data.ShardLevelMetrics) {
        throw new Error('DisableEnhancedMonitoringInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.ShardLevelMetrics) rtn.ShardLevelMetrics = _MetricsNameList.serialize!(data.ShardLevelMetrics as any);

        return rtn;
    },
};