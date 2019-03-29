import {_ResourceTags} from './_ResourceTags';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListTagsForResourceOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ResourceTags: {
            shape: _ResourceTags,
            locationName: 'resourceTags',
        },
    },
};