import {_BranchInfo} from './_BranchInfo';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DeleteBranchOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        deletedBranch: {
            shape: _BranchInfo,
        },
    },
};