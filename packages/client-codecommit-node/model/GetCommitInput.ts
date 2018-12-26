import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetCommitInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'commitId',
    ],
    members: {
        repositoryName: {
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