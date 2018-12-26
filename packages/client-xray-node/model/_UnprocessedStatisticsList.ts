import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_UnprocessedStatistics} from './_UnprocessedStatistics';

export const _UnprocessedStatisticsList: _List_ = {
    type: 'list',
    member: {
        shape: _UnprocessedStatistics,
    },
};