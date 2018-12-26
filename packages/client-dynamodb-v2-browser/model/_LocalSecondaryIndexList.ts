import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_LocalSecondaryIndex} from './_LocalSecondaryIndex';

export const _LocalSecondaryIndexList: _List_ = {
    type: 'list',
    member: {
        shape: _LocalSecondaryIndex,
    },
};