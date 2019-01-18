import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_Consumer as _Consumer_Type} from '../types/_Consumer';
import {_Consumer} from './_Consumer';

export const _ConsumerList: _ListModel_<_Consumer_Type, any> = {
    parse: (data: any): Array<_Consumer_Type> => {
        return (data as Array<_Consumer_Type>).map(_item => _Consumer.parse!(_item));
    },

    serialize: (input: Array<_Consumer_Type>): any => {
        return input.map(_item => _Consumer.serialize!(_item));
    },
};