import {_SamplingRule} from './_SamplingRule';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _SamplingRuleRecord: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        SamplingRule: {
            shape: _SamplingRule,
        },
        CreatedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        ModifiedAt: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};