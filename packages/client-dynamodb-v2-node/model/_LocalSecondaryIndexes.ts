import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_LocalSecondaryIndexInfo as _LocalSecondaryIndexInfo_Type} from '../types/_LocalSecondaryIndexInfo';
import {_LocalSecondaryIndexInfo} from './_LocalSecondaryIndexInfo';

export const _LocalSecondaryIndexes: _ListModel_<_LocalSecondaryIndexInfo_Type, any> = {
    parse: (data: any): Array<_LocalSecondaryIndexInfo_Type> => {
        return (data as Array<_LocalSecondaryIndexInfo_Type>).map(_item => _LocalSecondaryIndexInfo.parse!(_item));
    },

    serialize: (input: Array<_LocalSecondaryIndexInfo_Type>): any => {
        return input.map(_item => _LocalSecondaryIndexInfo.serialize!(_item));
    },
};