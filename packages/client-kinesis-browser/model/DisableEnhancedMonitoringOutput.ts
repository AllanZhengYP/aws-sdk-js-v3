import {_MetricsNameList} from './_MetricsNameList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DisableEnhancedMonitoringOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        StreamName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        CurrentShardLevelMetrics: {
            shape: _MetricsNameList,
        },
        DesiredShardLevelMetrics: {
            shape: _MetricsNameList,
        },
    },
};