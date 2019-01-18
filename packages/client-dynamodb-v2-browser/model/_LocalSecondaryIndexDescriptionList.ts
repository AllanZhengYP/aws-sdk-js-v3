import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_LocalSecondaryIndexDescription as _LocalSecondaryIndexDescription_Type} from '../types/_LocalSecondaryIndexDescription';
import {_LocalSecondaryIndexDescription} from './_LocalSecondaryIndexDescription';

export const _LocalSecondaryIndexDescriptionList: _ListModel_<_LocalSecondaryIndexDescription_Type, any> = {
    parse: (data: any): Array<_LocalSecondaryIndexDescription_Type> => {
        return (data as Array<_LocalSecondaryIndexDescription_Type>).map(_item => _LocalSecondaryIndexDescription.parse!(_item));
    },

    serialize: (input: Array<_LocalSecondaryIndexDescription_Type>): any => {
        return input.map(_item => _LocalSecondaryIndexDescription.serialize!(_item));
    },
};