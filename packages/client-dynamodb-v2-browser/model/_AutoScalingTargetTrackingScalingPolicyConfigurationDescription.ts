import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _AutoScalingTargetTrackingScalingPolicyConfigurationDescription: _Structure_ = {
    type: 'structure',
    required: [
        'TargetValue',
    ],
    members: {
        DisableScaleIn: {
            shape: {
                type: 'boolean',
            },
        },
        ScaleInCooldown: {
            shape: {
                type: 'integer',
            },
        },
        ScaleOutCooldown: {
            shape: {
                type: 'integer',
            },
        },
        TargetValue: {
            shape: {
                type: 'float',
            },
        },
    },
};