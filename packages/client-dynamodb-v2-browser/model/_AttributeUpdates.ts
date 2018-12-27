import {Map as _Map_} from '@aws-js-sdk-v3-prerelease/types';
import {_AttributeValueUpdate} from './_AttributeValueUpdate';

export const _AttributeUpdates: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: _AttributeValueUpdate,
    },
};