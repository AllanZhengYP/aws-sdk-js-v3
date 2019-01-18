import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_ItemCollectionMetrics as _ItemCollectionMetrics_Type} from '../types/_ItemCollectionMetrics';
import {_ItemCollectionMetrics} from './_ItemCollectionMetrics';

export const _ItemCollectionMetricsMultiple: _ListModel_<_ItemCollectionMetrics_Type, any> = {
    parse: (data: any): Array<_ItemCollectionMetrics_Type> => {
        return (data as Array<_ItemCollectionMetrics_Type>).map(_item => _ItemCollectionMetrics.parse!(_item));
    },

    serialize: (input: Array<_ItemCollectionMetrics_Type>): any => {
        return input.map(_item => _ItemCollectionMetrics.serialize!(_item));
    },
};