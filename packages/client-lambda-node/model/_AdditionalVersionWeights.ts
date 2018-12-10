import {Map as _Map_} from '@aws-js-sdk-v3-prerelease/types';

export const _AdditionalVersionWeights: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
    value: {
        shape: {
            type: 'float',
        },
    },
};