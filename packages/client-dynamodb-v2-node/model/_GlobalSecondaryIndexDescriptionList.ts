import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_GlobalSecondaryIndexDescription as _GlobalSecondaryIndexDescription_Type} from '../types/_GlobalSecondaryIndexDescription';
import {_GlobalSecondaryIndexDescription} from './_GlobalSecondaryIndexDescription';

export const _GlobalSecondaryIndexDescriptionList: _ListModel_<_GlobalSecondaryIndexDescription_Type, any> = {
    parse: (data: any): Array<_GlobalSecondaryIndexDescription_Type> => {
        return (data as Array<_GlobalSecondaryIndexDescription_Type>).map(_item => _GlobalSecondaryIndexDescription.parse!(_item));
    },

    serialize: (input: Array<_GlobalSecondaryIndexDescription_Type>): any => {
        return input.map(_item => _GlobalSecondaryIndexDescription.serialize!(_item));
    },
};