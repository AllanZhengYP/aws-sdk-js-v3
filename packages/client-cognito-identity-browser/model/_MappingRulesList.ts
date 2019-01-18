import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_MappingRule as _MappingRule_Type} from '../types/_MappingRule';
import {_MappingRule} from './_MappingRule';

export const _MappingRulesList: _ListModel_<_MappingRule_Type, any> = {
    parse: (data: any): Array<_MappingRule_Type> => {
        return (data as Array<_MappingRule_Type>).map(_item => _MappingRule.parse!(_item));
    },

    serialize: (input: Array<_MappingRule_Type>): any => {
        return input.map(_item => _MappingRule.serialize!(_item));
    },
};