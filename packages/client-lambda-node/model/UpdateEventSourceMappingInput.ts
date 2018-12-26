import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const UpdateEventSourceMappingInput: _Structure_ = {
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
        FunctionName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Enabled: {
            shape: {
                type: 'boolean',
            },
        },
        BatchSize: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
    },
};