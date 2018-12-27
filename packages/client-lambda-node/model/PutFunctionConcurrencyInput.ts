import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const PutFunctionConcurrencyInput: _Structure_ = {
    type: 'structure',
    required: [
        'FunctionName',
        'ReservedConcurrentExecutions',
    ],
    members: {
        FunctionName: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'FunctionName',
        },
        ReservedConcurrentExecutions: {
            shape: {
                type: 'integer',
            },
        },
    },
};