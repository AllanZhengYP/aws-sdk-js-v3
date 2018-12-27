import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_GlobalSecondaryIndexInfo} from './_GlobalSecondaryIndexInfo';

export const _GlobalSecondaryIndexes: _List_ = {
    type: 'list',
    member: {
        shape: _GlobalSecondaryIndexInfo,
    },
};