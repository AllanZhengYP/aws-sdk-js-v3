import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_PullRequestEvent} from './_PullRequestEvent';

export const _PullRequestEventList: _List_ = {
    type: 'list',
    member: {
        shape: _PullRequestEvent,
    },
};