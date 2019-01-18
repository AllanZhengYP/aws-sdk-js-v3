import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_KeySchemaElement as _KeySchemaElement_Type} from '../types/_KeySchemaElement';
import {_KeySchemaElement} from './_KeySchemaElement';

export const _KeySchema: _ListModel_<_KeySchemaElement_Type, any> = {
    parse: (data: any): Array<_KeySchemaElement_Type> => {
        return (data as Array<_KeySchemaElement_Type>).map(_item => _KeySchemaElement.parse!(_item));
    },

    serialize: (input: Array<_KeySchemaElement_Type>): any => {
        return input.map(_item => _KeySchemaElement.serialize!(_item));
    },
};