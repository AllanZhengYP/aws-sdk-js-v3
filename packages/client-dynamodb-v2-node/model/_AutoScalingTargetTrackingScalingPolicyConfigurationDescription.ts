import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_AutoScalingTargetTrackingScalingPolicyConfigurationDescription as _AutoScalingTargetTrackingScalingPolicyConfigurationDescription_Type} from '../types/_AutoScalingTargetTrackingScalingPolicyConfigurationDescription';

export const _AutoScalingTargetTrackingScalingPolicyConfigurationDescription: _StructureModel_<_AutoScalingTargetTrackingScalingPolicyConfigurationDescription_Type, any> = {
    parse: (data: any): _AutoScalingTargetTrackingScalingPolicyConfigurationDescription_Type => {
        let rtn: any = {};
        if (data.DisableScaleIn) rtn.DisableScaleIn = data.DisableScaleIn;
    if (data.ScaleInCooldown) rtn.ScaleInCooldown = data.ScaleInCooldown;
    if (data.ScaleOutCooldown) rtn.ScaleOutCooldown = data.ScaleOutCooldown;
    if (data.TargetValue) rtn.TargetValue = data.TargetValue;
        return rtn as _AutoScalingTargetTrackingScalingPolicyConfigurationDescription_Type;
    },
    serialize: (data: _AutoScalingTargetTrackingScalingPolicyConfigurationDescription_Type): any => {
    		if (!data.TargetValue) {
        throw new Error('_AutoScalingTargetTrackingScalingPolicyConfigurationDescription has missing required parameter');
    }
        let rtn: any = {};
        if (data.DisableScaleIn) rtn.DisableScaleIn = data.DisableScaleIn;

    if (data.ScaleInCooldown) rtn.ScaleInCooldown = data.ScaleInCooldown;

    if (data.ScaleOutCooldown) rtn.ScaleOutCooldown = data.ScaleOutCooldown;

    if (data.TargetValue) rtn.TargetValue = data.TargetValue;

        return rtn;
    },
};