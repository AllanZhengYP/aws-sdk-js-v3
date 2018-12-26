import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _SymbolicLink: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        blobId: {
            shape: {
                type: 'string',
            },
        },
        absolutePath: {
            shape: {
                type: 'string',
            },
        },
        relativePath: {
            shape: {
                type: 'string',
            },
        },
        fileMode: {
            shape: {
                type: 'string',
            },
        },
    },
};