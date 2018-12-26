import {Map as _Map_} from '@aws-js-sdk-v3-prerelease/types';
import {_ExpectedAttributeValue} from './_ExpectedAttributeValue';

export const _ExpectedAttributeMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _ExpectedAttributeValue,
    },
};