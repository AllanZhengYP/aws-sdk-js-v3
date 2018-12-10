import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_PutRecordsResultEntry} from './_PutRecordsResultEntry';

export const _PutRecordsResultEntryList: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: _PutRecordsResultEntry,
    },
};