import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _BranchInfo: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        branchName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        commitId: {
            shape: {
                type: 'string',
            },
        },
    },
};