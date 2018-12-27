import {_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate} from './_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _AutoScalingPolicyUpdate: _Structure_ = {
    type: 'structure',
    required: [
        'TargetTrackingScalingPolicyConfiguration',
    ],
    members: {
        PolicyName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        TargetTrackingScalingPolicyConfiguration: {
            shape: _AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,
        },
    },
};