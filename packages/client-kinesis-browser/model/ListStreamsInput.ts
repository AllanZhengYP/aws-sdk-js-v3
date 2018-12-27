import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ListStreamsInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        ExclusiveStartStreamName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};