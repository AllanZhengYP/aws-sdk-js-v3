import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const DeleteStreamInput: _Structure_ = {
    type: 'structure',
    required: [
        'StreamName',
    ],
    members: {
        StreamName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        EnforceConsumerDeletion: {
            shape: {
                type: 'boolean',
            },
        },
    },
};