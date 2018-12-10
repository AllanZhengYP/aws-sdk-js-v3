import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const _RestoreSummary: _Structure_ = {
    type: 'structure',
    required: [
        'RestoreDateTime',
        'RestoreInProgress',
    ],
    members: {
        SourceBackupArn: {
            shape: {
                type: 'string',
                min: 37,
            },
        },
        SourceTableArn: {
            shape: {
                type: 'string',
            },
        },
        RestoreDateTime: {
            shape: {
                type: 'timestamp',
            },
        },
        RestoreInProgress: {
            shape: {
                type: 'boolean',
            },
        },
    },
};