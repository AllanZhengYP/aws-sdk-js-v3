import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_MappingRule as _MappingRule_Type} from '../types/_MappingRule';

export const _MappingRule: _StructureModel_<_MappingRule_Type, any> = {
    parse: (data: any): _MappingRule_Type => {
        let rtn: any = {};
        if (data.Claim) rtn.Claim = data.Claim;
    if (data.MatchType) rtn.MatchType = data.MatchType;
    if (data.Value) rtn.Value = data.Value;
    if (data.RoleARN) rtn.RoleARN = data.RoleARN;
        return rtn as _MappingRule_Type;
    },
    serialize: (data: _MappingRule_Type): any => {
    		if (!data.Claim||!data.MatchType||!data.Value||!data.RoleARN) {
        throw new Error('_MappingRule has missing required parameter');
    }
        let rtn: any = {};
        if (data.Claim) rtn.Claim = data.Claim;

    if (data.MatchType) rtn.MatchType = data.MatchType;

    if (data.Value) rtn.Value = data.Value;

    if (data.RoleARN) rtn.RoleARN = data.RoleARN;

        return rtn;
    },
};