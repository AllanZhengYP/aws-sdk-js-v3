import {_BatchWriteItemRequestMap} from './_BatchWriteItemRequestMap';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const BatchWriteItemInput: _Structure_ = {
    type: 'structure',
    required: [
        'RequestItems',
    ],
    members: {
        RequestItems: {
            shape: _BatchWriteItemRequestMap,
        },
        ReturnConsumedCapacity: {
            shape: {
                type: 'string',
            },
        },
        ReturnItemCollectionMetrics: {
            shape: {
                type: 'string',
            },
        },
    },
};