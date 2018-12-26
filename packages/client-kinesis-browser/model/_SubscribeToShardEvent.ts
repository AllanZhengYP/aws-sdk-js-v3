import {_RecordList} from './_RecordList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _SubscribeToShardEvent: _Structure_ = {
    type: 'structure',
    required: [
        'Records',
        'ContinuationSequenceNumber',
        'MillisBehindLatest',
    ],
    members: {
        Records: {
            shape: _RecordList,
        },
        ContinuationSequenceNumber: {
            shape: {
                type: 'string',
            },
        },
        MillisBehindLatest: {
            shape: {
                type: 'integer',
            },
        },
    },
};