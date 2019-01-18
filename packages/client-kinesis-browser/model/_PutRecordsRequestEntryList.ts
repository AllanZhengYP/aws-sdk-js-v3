import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_PutRecordsRequestEntry as _PutRecordsRequestEntry_Type} from '../types/_PutRecordsRequestEntry';
import {_PutRecordsRequestEntry} from './_PutRecordsRequestEntry';

export const _PutRecordsRequestEntryList: _ListModel_<_PutRecordsRequestEntry_Type, any> = {
    parse: (data: any): Array<_PutRecordsRequestEntry_Type> => {
        return (data as Array<_PutRecordsRequestEntry_Type>).map(_item => _PutRecordsRequestEntry.parse!(_item));
    },

    serialize: (input: Array<_PutRecordsRequestEntry_Type>): any => {
        return input.map(_item => _PutRecordsRequestEntry.serialize!(_item));
    },
};