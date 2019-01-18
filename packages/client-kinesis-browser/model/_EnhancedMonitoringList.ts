import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_EnhancedMetrics as _EnhancedMetrics_Type} from '../types/_EnhancedMetrics';
import {_EnhancedMetrics} from './_EnhancedMetrics';

export const _EnhancedMonitoringList: _ListModel_<_EnhancedMetrics_Type, any> = {
    parse: (data: any): Array<_EnhancedMetrics_Type> => {
        return (data as Array<_EnhancedMetrics_Type>).map(_item => _EnhancedMetrics.parse!(_item));
    },

    serialize: (input: Array<_EnhancedMetrics_Type>): any => {
        return input.map(_item => _EnhancedMetrics.serialize!(_item));
    },
};