import {_Commit} from './_Commit';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetCommitOutput: _Structure_ = {
    type: 'structure',
    required: [
        'commit',
    ],
    members: {
        commit: {
            shape: _Commit,
        },
    },
};