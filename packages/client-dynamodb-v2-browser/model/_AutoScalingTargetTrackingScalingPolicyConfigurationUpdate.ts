import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate as _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate_Type} from '../types/_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate';

export const _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate: _StructureModel_<_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate_Type, any> = {
    parse: (data: any): _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate_Type => {
        let rtn: any = {};
        if (data.DisableScaleIn) rtn.DisableScaleIn = data.DisableScaleIn;
    if (data.ScaleInCooldown) rtn.ScaleInCooldown = data.ScaleInCooldown;
    if (data.ScaleOutCooldown) rtn.ScaleOutCooldown = data.ScaleOutCooldown;
    if (data.TargetValue) rtn.TargetValue = data.TargetValue;
        return rtn as _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate_Type;
    },
    serialize: (data: _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate_Type): any => {
    		if (!data.TargetValue) {
        throw new Error('_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate has missing required parameter');
    }
        let rtn: any = {};
        if (data.DisableScaleIn) rtn.DisableScaleIn = data.DisableScaleIn;

    if (data.ScaleInCooldown) rtn.ScaleInCooldown = data.ScaleInCooldown;

    if (data.ScaleOutCooldown) rtn.ScaleOutCooldown = data.ScaleOutCooldown;

    if (data.TargetValue) rtn.TargetValue = data.TargetValue;

        return rtn;
    },
};