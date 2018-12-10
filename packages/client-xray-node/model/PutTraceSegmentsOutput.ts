import {_UnprocessedTraceSegmentList} from './_UnprocessedTraceSegmentList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const PutTraceSegmentsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        UnprocessedTraceSegments: {
            shape: _UnprocessedTraceSegmentList,
        },
    },
};