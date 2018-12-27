import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_EnhancedMetrics} from './_EnhancedMetrics';

export const _EnhancedMonitoringList: _List_ = {
    type: 'list',
    member: {
        shape: _EnhancedMetrics,
    },
};