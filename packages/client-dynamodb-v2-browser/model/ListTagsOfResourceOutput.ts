import {_TagList} from './_TagList';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ListTagsOfResourceOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Tags: {
            shape: _TagList,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};