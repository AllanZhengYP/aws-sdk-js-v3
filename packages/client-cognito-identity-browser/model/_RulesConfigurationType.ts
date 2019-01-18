import {_MappingRulesList} from './_MappingRulesList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_RulesConfigurationType as _RulesConfigurationType_Type} from '../types/_RulesConfigurationType';

export const _RulesConfigurationType: _StructureModel_<_RulesConfigurationType_Type, any> = {
    parse: (data: any): _RulesConfigurationType_Type => {
        let rtn: any = {};
        if (data.Rules) rtn.Rules = _MappingRulesList.parse!(data.Rules);
        return rtn as _RulesConfigurationType_Type;
    },
    serialize: (data: _RulesConfigurationType_Type): any => {
    		if (!data.Rules) {
        throw new Error('_RulesConfigurationType has missing required parameter');
    }
        let rtn: any = {};
        if (data.Rules) rtn.Rules = _MappingRulesList.serialize!(data.Rules as any);

        return rtn;
    },
};