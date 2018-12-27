import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ListBranchesInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};