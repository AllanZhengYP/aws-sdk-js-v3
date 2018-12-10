import {_TraceList} from './_TraceList';
import {_UnprocessedTraceIdList} from './_UnprocessedTraceIdList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const BatchGetTracesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Traces: {
            shape: _TraceList,
        },
        UnprocessedTraceIds: {
            shape: _UnprocessedTraceIdList,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};