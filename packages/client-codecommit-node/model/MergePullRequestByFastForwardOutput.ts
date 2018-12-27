import {_PullRequest} from './_PullRequest';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const MergePullRequestByFastForwardOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        pullRequest: {
            shape: _PullRequest,
        },
    },
};