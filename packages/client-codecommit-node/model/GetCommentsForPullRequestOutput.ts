import {_CommentsForPullRequestData} from './_CommentsForPullRequestData';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetCommentsForPullRequestOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        commentsForPullRequestData: {
            shape: _CommentsForPullRequestData,
        },
        nextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};