import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_AttributeMap as _AttributeMap_Type} from '../types/_AttributeMap';
import {_AttributeMap} from './_AttributeMap';

export const _ItemList: _ListModel_<_AttributeMap_Type, any> = {
    parse: (data: any): Array<_AttributeMap_Type> => {
        return (data as Array<_AttributeMap_Type>).map(_item => _AttributeMap.parse!(_item));
    },

    serialize: (input: Array<_AttributeMap_Type>): any => {
        return input.map(_item => _AttributeMap.serialize!(_item));
    },
};