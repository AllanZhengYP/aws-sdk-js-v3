import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _UnprocessedTraceSegment: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        ErrorCode: {
            shape: {
                type: 'string',
            },
        },
        Message: {
            shape: {
                type: 'string',
            },
        },
    },
};