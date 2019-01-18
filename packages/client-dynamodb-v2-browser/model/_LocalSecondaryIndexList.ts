import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_LocalSecondaryIndex as _LocalSecondaryIndex_Type} from '../types/_LocalSecondaryIndex';
import {_LocalSecondaryIndex} from './_LocalSecondaryIndex';

export const _LocalSecondaryIndexList: _ListModel_<_LocalSecondaryIndex_Type, any> = {
    parse: (data: any): Array<_LocalSecondaryIndex_Type> => {
        return (data as Array<_LocalSecondaryIndex_Type>).map(_item => _LocalSecondaryIndex.parse!(_item));
    },

    serialize: (input: Array<_LocalSecondaryIndex_Type>): any => {
        return input.map(_item => _LocalSecondaryIndex.serialize!(_item));
    },
};