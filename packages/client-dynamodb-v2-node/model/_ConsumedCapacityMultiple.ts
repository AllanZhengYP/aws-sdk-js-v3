import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_ConsumedCapacity} from './_ConsumedCapacity';

export const _ConsumedCapacityMultiple: _List_ = {
    type: 'list',
    member: {
        shape: _ConsumedCapacity,
    },
};