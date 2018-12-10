import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetCommentsForComparedCommitInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'afterCommitId',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        beforeCommitId: {
            shape: {
                type: 'string',
            },
        },
        afterCommitId: {
            shape: {
                type: 'string',
            },
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
        maxResults: {
            shape: {
                type: 'integer',
            },
        },
    },
};