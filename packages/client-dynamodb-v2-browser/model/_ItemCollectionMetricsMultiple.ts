import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_ItemCollectionMetrics} from './_ItemCollectionMetrics';

export const _ItemCollectionMetricsMultiple: _List_ = {
    type: 'list',
    member: {
        shape: _ItemCollectionMetrics,
    },
};