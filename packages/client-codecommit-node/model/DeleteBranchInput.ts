import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DeleteBranchInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'branchName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        branchName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};