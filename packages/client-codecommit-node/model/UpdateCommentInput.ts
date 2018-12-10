import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const UpdateCommentInput: _Structure_ = {
    type: 'structure',
    required: [
        'commentId',
        'content',
    ],
    members: {
        commentId: {
            shape: {
                type: 'string',
            },
        },
        content: {
            shape: {
                type: 'string',
            },
        },
    },
};