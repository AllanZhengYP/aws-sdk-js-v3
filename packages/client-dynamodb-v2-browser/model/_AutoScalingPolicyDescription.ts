import {_AutoScalingTargetTrackingScalingPolicyConfigurationDescription} from './_AutoScalingTargetTrackingScalingPolicyConfigurationDescription';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_AutoScalingPolicyDescription as _AutoScalingPolicyDescription_Type} from '../types/_AutoScalingPolicyDescription';

export const _AutoScalingPolicyDescription: _StructureModel_<_AutoScalingPolicyDescription_Type, any> = {
    parse: (data: any): _AutoScalingPolicyDescription_Type => {
        let rtn: any = {};
        if (data.PolicyName) rtn.PolicyName = data.PolicyName;
    if (data.TargetTrackingScalingPolicyConfiguration) rtn.TargetTrackingScalingPolicyConfiguration = _AutoScalingTargetTrackingScalingPolicyConfigurationDescription.parse!(data.TargetTrackingScalingPolicyConfiguration);
        return rtn as _AutoScalingPolicyDescription_Type;
    },
    serialize: (data: _AutoScalingPolicyDescription_Type): any => {
        let rtn: any = {};
        if (data.PolicyName) rtn.PolicyName = data.PolicyName;

    if (data.TargetTrackingScalingPolicyConfiguration) rtn.TargetTrackingScalingPolicyConfiguration = _AutoScalingTargetTrackingScalingPolicyConfigurationDescription.serialize!(data.TargetTrackingScalingPolicyConfiguration as any);

        return rtn;
    },
};