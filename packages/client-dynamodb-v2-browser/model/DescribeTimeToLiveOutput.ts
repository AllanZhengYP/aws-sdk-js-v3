import {_TimeToLiveDescription} from './_TimeToLiveDescription';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DescribeTimeToLiveOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TimeToLiveDescription: {
            shape: _TimeToLiveDescription,
        },
    },
};