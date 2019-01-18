import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_GlobalSecondaryIndexUpdate as _GlobalSecondaryIndexUpdate_Type} from '../types/_GlobalSecondaryIndexUpdate';
import {_GlobalSecondaryIndexUpdate} from './_GlobalSecondaryIndexUpdate';

export const _GlobalSecondaryIndexUpdateList: _ListModel_<_GlobalSecondaryIndexUpdate_Type, any> = {
    parse: (data: any): Array<_GlobalSecondaryIndexUpdate_Type> => {
        return (data as Array<_GlobalSecondaryIndexUpdate_Type>).map(_item => _GlobalSecondaryIndexUpdate.parse!(_item));
    },

    serialize: (input: Array<_GlobalSecondaryIndexUpdate_Type>): any => {
        return input.map(_item => _GlobalSecondaryIndexUpdate.serialize!(_item));
    },
};