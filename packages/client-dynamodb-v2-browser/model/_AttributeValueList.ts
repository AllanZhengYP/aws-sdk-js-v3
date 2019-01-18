import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_AttributeValue as _AttributeValue_Type} from '../types/_AttributeValue';
import {_AttributeValue} from './_AttributeValue';

export const _AttributeValueList: _ListModel_<_AttributeValue_Type, any> = {
    parse: (data: any): Array<_AttributeValue_Type> => {
        return (data as Array<_AttributeValue_Type>).map(_item => _AttributeValue.parse!(_item));
    },

    serialize: (input: Array<_AttributeValue_Type>): any => {
        return input.map(_item => _AttributeValue.serialize!(_item));
    },
};