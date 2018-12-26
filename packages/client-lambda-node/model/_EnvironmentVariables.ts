import {Map as _Map_} from '@aws-js-sdk-v3-prerelease/types';

export const _EnvironmentVariables: _Map_ = {
    type: 'map',
    sensitive: true,
    key: {
        shape: {
            type: 'string',
            sensitive: true,
        },
    },
    value: {
        shape: {
            type: 'string',
            sensitive: true,
        },
    },
};