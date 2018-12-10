import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_UnprocessedTraceSegment} from './_UnprocessedTraceSegment';

export const _UnprocessedTraceSegmentList: _List_ = {
    type: 'list',
    member: {
        shape: _UnprocessedTraceSegment,
    },
};