import {_TargetList} from './_TargetList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const CreatePullRequestInput: _Structure_ = {
    type: 'structure',
    required: [
        'title',
        'targets',
    ],
    members: {
        title: {
            shape: {
                type: 'string',
            },
        },
        description: {
            shape: {
                type: 'string',
            },
        },
        targets: {
            shape: _TargetList,
        },
        clientRequestToken: {
            shape: {
                type: 'string',
            },
        },
    },
};