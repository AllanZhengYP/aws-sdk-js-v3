import {_SubnetIds} from './_SubnetIds';
import {_SecurityGroupIds} from './_SecurityGroupIds';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _VpcConfig: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        SubnetIds: {
            shape: _SubnetIds,
        },
        SecurityGroupIds: {
            shape: _SecurityGroupIds,
        },
    },
};