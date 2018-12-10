import {_AliasNames} from './_AliasNames';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _Alias: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Name: {
            shape: {
                type: 'string',
            },
        },
        Names: {
            shape: _AliasNames,
        },
        Type: {
            shape: {
                type: 'string',
            },
        },
    },
};