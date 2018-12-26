import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DeleteFileOutput: _Structure_ = {
    type: 'structure',
    required: [
        'commitId',
        'blobId',
        'treeId',
        'filePath',
    ],
    members: {
        commitId: {
            shape: {
                type: 'string',
            },
        },
        blobId: {
            shape: {
                type: 'string',
            },
        },
        treeId: {
            shape: {
                type: 'string',
            },
        },
        filePath: {
            shape: {
                type: 'string',
            },
        },
    },
};