import {Structure as _Structure_} from '@aws-sdk/types';

export const ListTagsForResourceInput: _Structure_ = {
    type: 'structure',
    required: [
        'Arn',
    ],
    members: {
        Arn: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'arn',
        },
    },
};