import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_GlobalTable as _GlobalTable_Type} from '../types/_GlobalTable';
import {_GlobalTable} from './_GlobalTable';

export const _GlobalTableList: _ListModel_<_GlobalTable_Type, any> = {
    parse: (data: any): Array<_GlobalTable_Type> => {
        return (data as Array<_GlobalTable_Type>).map(_item => _GlobalTable.parse!(_item));
    },

    serialize: (input: Array<_GlobalTable_Type>): any => {
        return input.map(_item => _GlobalTable.serialize!(_item));
    },
};