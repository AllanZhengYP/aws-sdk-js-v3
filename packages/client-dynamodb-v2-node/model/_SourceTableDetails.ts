import {_KeySchema} from './_KeySchema';
import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _SourceTableDetails: _Structure_ = {
    type: 'structure',
    required: [
        'TableName',
        'TableId',
        'KeySchema',
        'TableCreationDateTime',
        'ProvisionedThroughput',
    ],
    members: {
        TableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        TableId: {
            shape: {
                type: 'string',
            },
        },
        TableArn: {
            shape: {
                type: 'string',
            },
        },
        TableSizeBytes: {
            shape: {
                type: 'integer',
            },
        },
        KeySchema: {
            shape: _KeySchema,
        },
        TableCreationDateTime: {
            shape: {
                type: 'timestamp',
            },
        },
        ProvisionedThroughput: {
            shape: _ProvisionedThroughput,
        },
        ItemCount: {
            shape: {
                type: 'integer',
            },
        },
    },
};