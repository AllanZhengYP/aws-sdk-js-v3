import {_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate} from './_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_AutoScalingPolicyUpdate as _AutoScalingPolicyUpdate_Type} from '../types/_AutoScalingPolicyUpdate';

export const _AutoScalingPolicyUpdate: _StructureModel_<_AutoScalingPolicyUpdate_Type, any> = {
    parse: (data: any): _AutoScalingPolicyUpdate_Type => {
        let rtn: any = {};
        if (data.PolicyName) rtn.PolicyName = data.PolicyName;
    if (data.TargetTrackingScalingPolicyConfiguration) rtn.TargetTrackingScalingPolicyConfiguration = _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate.parse!(data.TargetTrackingScalingPolicyConfiguration);
        return rtn as _AutoScalingPolicyUpdate_Type;
    },
    serialize: (data: _AutoScalingPolicyUpdate_Type): any => {
    		if (!data.TargetTrackingScalingPolicyConfiguration) {
        throw new Error('_AutoScalingPolicyUpdate has missing required parameter');
    }
        let rtn: any = {};
        if (data.PolicyName) rtn.PolicyName = data.PolicyName;

    if (data.TargetTrackingScalingPolicyConfiguration) rtn.TargetTrackingScalingPolicyConfiguration = _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate.serialize!(data.TargetTrackingScalingPolicyConfiguration as any);

        return rtn;
    },
};