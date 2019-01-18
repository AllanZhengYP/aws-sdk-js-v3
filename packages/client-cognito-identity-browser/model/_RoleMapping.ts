import {_RulesConfigurationType} from './_RulesConfigurationType';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_RoleMapping as _RoleMapping_Type} from '../types/_RoleMapping';

export const _RoleMapping: _StructureModel_<_RoleMapping_Type, any> = {
    parse: (data: any): _RoleMapping_Type => {
        let rtn: any = {};
        if (data.Type) rtn.Type = data.Type;
    if (data.AmbiguousRoleResolution) rtn.AmbiguousRoleResolution = data.AmbiguousRoleResolution;
    if (data.RulesConfiguration) rtn.RulesConfiguration = _RulesConfigurationType.parse!(data.RulesConfiguration);
        return rtn as _RoleMapping_Type;
    },
    serialize: (data: _RoleMapping_Type): any => {
    		if (!data.Type) {
        throw new Error('_RoleMapping has missing required parameter');
    }
        let rtn: any = {};
        if (data.Type) rtn.Type = data.Type;

    if (data.AmbiguousRoleResolution) rtn.AmbiguousRoleResolution = data.AmbiguousRoleResolution;

    if (data.RulesConfiguration) rtn.RulesConfiguration = _RulesConfigurationType.serialize!(data.RulesConfiguration as any);

        return rtn;
    },
};