import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetPullRequestInput: _Structure_ = {
    type: 'structure',
    required: [
        'pullRequestId',
    ],
    members: {
        pullRequestId: {
            shape: {
                type: 'string',
            },
        },
    },
};