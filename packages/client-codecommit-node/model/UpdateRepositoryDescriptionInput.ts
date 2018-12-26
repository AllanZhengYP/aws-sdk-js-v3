import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const UpdateRepositoryDescriptionInput: _Structure_ = {
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
        repositoryDescription: {
            shape: {
                type: 'string',
            },
        },
    },
};