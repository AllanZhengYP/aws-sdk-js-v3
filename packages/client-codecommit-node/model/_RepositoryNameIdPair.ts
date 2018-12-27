import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _RepositoryNameIdPair: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        repositoryId: {
            shape: {
                type: 'string',
            },
        },
    },
};