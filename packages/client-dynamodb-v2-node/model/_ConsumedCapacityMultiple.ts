import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_ConsumedCapacity as _ConsumedCapacity_Type} from '../types/_ConsumedCapacity';
import {_ConsumedCapacity} from './_ConsumedCapacity';

export const _ConsumedCapacityMultiple: _ListModel_<_ConsumedCapacity_Type, any> = {
    parse: (data: any): Array<_ConsumedCapacity_Type> => {
        return (data as Array<_ConsumedCapacity_Type>).map(_item => _ConsumedCapacity.parse!(_item));
    },

    serialize: (input: Array<_ConsumedCapacity_Type>): any => {
        return input.map(_item => _ConsumedCapacity.serialize!(_item));
    },
};