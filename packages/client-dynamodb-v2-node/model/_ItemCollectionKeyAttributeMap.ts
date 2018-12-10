import {Map as _Map_} from '@aws-js-sdk-v3-prerelease/types';
import {_AttributeValue} from './_AttributeValue';

export const _ItemCollectionKeyAttributeMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _AttributeValue,
    },
};