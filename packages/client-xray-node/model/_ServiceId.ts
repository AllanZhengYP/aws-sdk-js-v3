import {_ServiceNames} from './_ServiceNames';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _ServiceId: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Name: {
            shape: {
                type: 'string',
            },
        },
        Names: {
            shape: _ServiceNames,
        },
        AccountId: {
            shape: {
                type: 'string',
            },
        },
        Type: {
            shape: {
                type: 'string',
            },
        },
    },
};