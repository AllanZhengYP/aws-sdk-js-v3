import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ListRepositoriesInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        nextToken: {
            shape: {
                type: 'string',
            },
        },
        sortBy: {
            shape: {
                type: 'string',
            },
        },
        order: {
            shape: {
                type: 'string',
            },
        },
    },
};