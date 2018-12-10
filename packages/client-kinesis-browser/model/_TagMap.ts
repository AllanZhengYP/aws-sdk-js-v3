import {Map as _Map_} from '@aws-js-sdk-v3-prerelease/types';

export const _TagMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
    value: {
        shape: {
            type: 'string',
        },
    },
};