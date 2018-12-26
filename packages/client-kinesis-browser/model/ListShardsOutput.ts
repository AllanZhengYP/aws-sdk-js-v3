import {_ShardList} from './_ShardList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ListShardsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Shards: {
            shape: _ShardList,
        },
        NextToken: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};