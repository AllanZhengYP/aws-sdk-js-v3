import {Map as _Map_} from '@aws-js-sdk-v3-prerelease/types';
import {_WriteRequests} from './_WriteRequests';

export const _BatchWriteItemRequestMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
            min: 3,
        },
    },
    value: {
        shape: _WriteRequests,
    },
};