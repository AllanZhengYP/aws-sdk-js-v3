import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetBlobInput: _Structure_ = {
    type: 'structure',
    required: [
        'repositoryName',
        'blobId',
    ],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        blobId: {
            shape: {
                type: 'string',
            },
        },
    },
};