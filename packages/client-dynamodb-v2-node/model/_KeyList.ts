import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_Key as _Key_Type} from '../types/_Key';
import {_Key} from './_Key';

export const _KeyList: _ListModel_<_Key_Type, any> = {
    parse: (data: any): Array<_Key_Type> => {
        return (data as Array<_Key_Type>).map(_item => _Key.parse!(_item));
    },

    serialize: (input: Array<_Key_Type>): any => {
        return input.map(_item => _Key.serialize!(_item));
    },
};