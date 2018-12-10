import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const UpdatePullRequestStatusInput: _Structure_ = {
    type: 'structure',
    required: [
        'pullRequestId',
        'pullRequestStatus',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
        pullRequestStatus: {
            shape: {
                type: 'string',
            },
        },
    },
};