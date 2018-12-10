import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetCommentInput: _Structure_ = {
    type: 'structure',
    required: [
        'commentId',
    ],
    members: {
        commentId: {
            shape: {
                type: 'string',
            },
        },
    },
};