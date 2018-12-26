import {_Tags} from './_Tags';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const TagResourceInput: _Structure_ = {
    type: 'structure',
    required: [
        'Resource',
        'Tags',
    ],
    members: {
        Resource: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'ARN',
        },
        Tags: {
            shape: _Tags,
        },
    },
};