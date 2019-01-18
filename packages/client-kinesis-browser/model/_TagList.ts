import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_Tag as _Tag_Type} from '../types/_Tag';
import {_Tag} from './_Tag';

export const _TagList: _ListModel_<_Tag_Type, any> = {
    parse: (data: any): Array<_Tag_Type> => {
        return (data as Array<_Tag_Type>).map(_item => _Tag.parse!(_item));
    },

    serialize: (input: Array<_Tag_Type>): any => {
        return input.map(_item => _Tag.serialize!(_item));
    },
};