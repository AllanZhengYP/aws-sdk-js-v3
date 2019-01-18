import {_MetricsNameList} from './_MetricsNameList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {EnableEnhancedMonitoringInput as EnableEnhancedMonitoringInput_Type} from '../types/EnableEnhancedMonitoringInput';

export const EnableEnhancedMonitoringInput: _OperationInputShapeModel_<EnableEnhancedMonitoringInput_Type, any> = {
    serialize: (data: EnableEnhancedMonitoringInput_Type): any => {
    		if (!data.StreamName||!data.ShardLevelMetrics) {
        throw new Error('EnableEnhancedMonitoringInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

    if (data.ShardLevelMetrics) rtn.ShardLevelMetrics = _MetricsNameList.serialize!(data.ShardLevelMetrics as any);

        return rtn;
    },
};