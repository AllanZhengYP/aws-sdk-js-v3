import {_TraceIdList} from './_TraceIdList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const BatchGetTracesInput: _Structure_ = {
    type: 'structure',
    required: [
        'TraceIds',
    ],
    members: {
        TraceIds: {
            shape: _TraceIdList,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};