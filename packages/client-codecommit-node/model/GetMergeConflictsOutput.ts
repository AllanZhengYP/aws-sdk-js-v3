import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetMergeConflictsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'mergeable',
        'destinationCommitId',
        'sourceCommitId',
    ],
    members: {
        mergeable: {
            shape: {
                type: 'boolean',
            },
        },
        destinationCommitId: {
            shape: {
                type: 'string',
            },
        },
        sourceCommitId: {
            shape: {
                type: 'string',
            },
        },
    },
};