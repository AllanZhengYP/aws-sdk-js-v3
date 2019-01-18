import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_PutRecordsResultEntry as _PutRecordsResultEntry_Type} from '../types/_PutRecordsResultEntry';
import {_PutRecordsResultEntry} from './_PutRecordsResultEntry';

export const _PutRecordsResultEntryList: _ListModel_<_PutRecordsResultEntry_Type, any> = {
    parse: (data: any): Array<_PutRecordsResultEntry_Type> => {
        return (data as Array<_PutRecordsResultEntry_Type>).map(_item => _PutRecordsResultEntry.parse!(_item));
    },

    serialize: (input: Array<_PutRecordsResultEntry_Type>): any => {
        return input.map(_item => _PutRecordsResultEntry.serialize!(_item));
    },
};