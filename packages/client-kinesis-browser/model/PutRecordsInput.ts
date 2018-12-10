import {_PutRecordsRequestEntryList} from './_PutRecordsRequestEntryList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const PutRecordsInput: _Structure_ = {
    type: 'structure',
    required: [
        'Records',
        'StreamName',
    ],
    members: {
        Records: {
            shape: _PutRecordsRequestEntryList,
        },
        StreamName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};