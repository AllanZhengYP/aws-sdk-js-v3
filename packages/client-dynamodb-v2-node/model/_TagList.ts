import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_Tag} from './_Tag';

export const _TagList: _List_ = {
    type: 'list',
    member: {
        shape: _Tag,
    },
};