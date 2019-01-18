import {_AutoScalingPolicyDescriptionList} from './_AutoScalingPolicyDescriptionList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_AutoScalingSettingsDescription as _AutoScalingSettingsDescription_Type} from '../types/_AutoScalingSettingsDescription';

export const _AutoScalingSettingsDescription: _StructureModel_<_AutoScalingSettingsDescription_Type, any> = {
    parse: (data: any): _AutoScalingSettingsDescription_Type => {
        let rtn: any = {};
        if (data.MinimumUnits) rtn.MinimumUnits = data.MinimumUnits;
    if (data.MaximumUnits) rtn.MaximumUnits = data.MaximumUnits;
    if (data.AutoScalingDisabled) rtn.AutoScalingDisabled = data.AutoScalingDisabled;
    if (data.AutoScalingRoleArn) rtn.AutoScalingRoleArn = data.AutoScalingRoleArn;
    if (data.ScalingPolicies) rtn.ScalingPolicies = _AutoScalingPolicyDescriptionList.parse!(data.ScalingPolicies);
        return rtn as _AutoScalingSettingsDescription_Type;
    },
    serialize: (data: _AutoScalingSettingsDescription_Type): any => {
        let rtn: any = {};
        if (data.MinimumUnits) rtn.MinimumUnits = data.MinimumUnits;

    if (data.MaximumUnits) rtn.MaximumUnits = data.MaximumUnits;

    if (data.AutoScalingDisabled) rtn.AutoScalingDisabled = data.AutoScalingDisabled;

    if (data.AutoScalingRoleArn) rtn.AutoScalingRoleArn = data.AutoScalingRoleArn;

    if (data.ScalingPolicies) rtn.ScalingPolicies = _AutoScalingPolicyDescriptionList.serialize!(data.ScalingPolicies as any);

        return rtn;
    },
};