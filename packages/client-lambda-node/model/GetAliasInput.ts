import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const GetAliasInput: _Structure_ = {
    type: 'structure',
    required: [
        'FunctionName',
        'Name',
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
        Name: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Name',
        },
    },
};