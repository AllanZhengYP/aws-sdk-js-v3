import {_MetricsNameList} from './_MetricsNameList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _EnhancedMetrics: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ShardLevelMetrics: {
            shape: _MetricsNameList,
        },
    },
};