import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_GlobalSecondaryIndexInfo as _GlobalSecondaryIndexInfo_Type} from '../types/_GlobalSecondaryIndexInfo';
import {_GlobalSecondaryIndexInfo} from './_GlobalSecondaryIndexInfo';

export const _GlobalSecondaryIndexes: _ListModel_<_GlobalSecondaryIndexInfo_Type, any> = {
    parse: (data: any): Array<_GlobalSecondaryIndexInfo_Type> => {
        return (data as Array<_GlobalSecondaryIndexInfo_Type>).map(_item => _GlobalSecondaryIndexInfo.parse!(_item));
    },

    serialize: (input: Array<_GlobalSecondaryIndexInfo_Type>): any => {
        return input.map(_item => _GlobalSecondaryIndexInfo.serialize!(_item));
    },
};