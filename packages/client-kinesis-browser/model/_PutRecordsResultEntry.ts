import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _PutRecordsResultEntry: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        SequenceNumber: {
            shape: {
                type: 'string',
            },
        },
        ShardId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ErrorCode: {
            shape: {
                type: 'string',
            },
        },
        ErrorMessage: {
            shape: {
                type: 'string',
            },
        },
    },
};