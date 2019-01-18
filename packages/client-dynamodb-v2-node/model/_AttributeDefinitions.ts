import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_AttributeDefinition as _AttributeDefinition_Type} from '../types/_AttributeDefinition';
import {_AttributeDefinition} from './_AttributeDefinition';

export const _AttributeDefinitions: _ListModel_<_AttributeDefinition_Type, any> = {
    parse: (data: any): Array<_AttributeDefinition_Type> => {
        return (data as Array<_AttributeDefinition_Type>).map(_item => _AttributeDefinition.parse!(_item));
    },

    serialize: (input: Array<_AttributeDefinition_Type>): any => {
        return input.map(_item => _AttributeDefinition.serialize!(_item));
    },
};