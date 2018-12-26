import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_LocalSecondaryIndexInfo} from './_LocalSecondaryIndexInfo';

export const _LocalSecondaryIndexes: _List_ = {
    type: 'list',
    member: {
        shape: _LocalSecondaryIndexInfo,
    },
};