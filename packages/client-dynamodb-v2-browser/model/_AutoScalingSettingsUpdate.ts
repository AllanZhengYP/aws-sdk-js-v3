import {_AutoScalingPolicyUpdate} from './_AutoScalingPolicyUpdate';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_AutoScalingSettingsUpdate as _AutoScalingSettingsUpdate_Type} from '../types/_AutoScalingSettingsUpdate';

export const _AutoScalingSettingsUpdate: _StructureModel_<_AutoScalingSettingsUpdate_Type, any> = {
    parse: (data: any): _AutoScalingSettingsUpdate_Type => {
        let rtn: any = {};
        if (data.MinimumUnits) rtn.MinimumUnits = data.MinimumUnits;
    if (data.MaximumUnits) rtn.MaximumUnits = data.MaximumUnits;
    if (data.AutoScalingDisabled) rtn.AutoScalingDisabled = data.AutoScalingDisabled;
    if (data.AutoScalingRoleArn) rtn.AutoScalingRoleArn = data.AutoScalingRoleArn;
    if (data.ScalingPolicyUpdate) rtn.ScalingPolicyUpdate = _AutoScalingPolicyUpdate.parse!(data.ScalingPolicyUpdate);
        return rtn as _AutoScalingSettingsUpdate_Type;
    },
    serialize: (data: _AutoScalingSettingsUpdate_Type): any => {
        let rtn: any = {};
        if (data.MinimumUnits) rtn.MinimumUnits = data.MinimumUnits;

    if (data.MaximumUnits) rtn.MaximumUnits = data.MaximumUnits;

    if (data.AutoScalingDisabled) rtn.AutoScalingDisabled = data.AutoScalingDisabled;

    if (data.AutoScalingRoleArn) rtn.AutoScalingRoleArn = data.AutoScalingRoleArn;

    if (data.ScalingPolicyUpdate) rtn.ScalingPolicyUpdate = _AutoScalingPolicyUpdate.serialize!(data.ScalingPolicyUpdate as any);

        return rtn;
    },
};