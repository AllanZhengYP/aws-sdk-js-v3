import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_MappingRule} from './_MappingRule';

export const _MappingRulesList: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: _MappingRule,
    },
};