import {_RecordList} from './_RecordList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetRecordsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'Records',
    ],
    members: {
        Records: {
            shape: _RecordList,
        },
        NextShardIterator: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MillisBehindLatest: {
            shape: {
                type: 'integer',
            },
        },
    },
};