import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetBlobOutput: _Structure_ = {
    type: 'structure',
    required: [
        'content',
    ],
    members: {
        content: {
            shape: {
                type: 'blob',
            },
        },
    },
};