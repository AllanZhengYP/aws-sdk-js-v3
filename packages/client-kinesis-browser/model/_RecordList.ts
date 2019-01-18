import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_Record as _Record_Type} from '../types/_Record';
import {_Record} from './_Record';

export const _RecordList: _ListModel_<_Record_Type, any> = {
    parse: (data: any): Array<_Record_Type> => {
        return (data as Array<_Record_Type>).map(_item => _Record.parse!(_item));
    },

    serialize: (input: Array<_Record_Type>): any => {
        return input.map(_item => _Record.serialize!(_item));
    },
};