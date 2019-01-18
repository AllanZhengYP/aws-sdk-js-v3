import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_GlobalSecondaryIndex as _GlobalSecondaryIndex_Type} from '../types/_GlobalSecondaryIndex';
import {_GlobalSecondaryIndex} from './_GlobalSecondaryIndex';

export const _GlobalSecondaryIndexList: _ListModel_<_GlobalSecondaryIndex_Type, any> = {
    parse: (data: any): Array<_GlobalSecondaryIndex_Type> => {
        return (data as Array<_GlobalSecondaryIndex_Type>).map(_item => _GlobalSecondaryIndex.parse!(_item));
    },

    serialize: (input: Array<_GlobalSecondaryIndex_Type>): any => {
        return input.map(_item => _GlobalSecondaryIndex.serialize!(_item));
    },
};