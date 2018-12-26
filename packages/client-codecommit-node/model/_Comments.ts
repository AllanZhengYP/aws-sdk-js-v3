import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_Comment} from './_Comment';

export const _Comments: _List_ = {
    type: 'list',
    member: {
        shape: _Comment,
    },
};