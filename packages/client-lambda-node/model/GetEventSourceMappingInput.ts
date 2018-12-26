import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetEventSourceMappingInput: _Structure_ = {
    type: 'structure',
    required: [
        'UUID',
    ],
    members: {
        UUID: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'UUID',
        },
    },
};