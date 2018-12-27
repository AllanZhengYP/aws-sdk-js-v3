import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const RestoreTableToPointInTimeInput: _Structure_ = {
    type: 'structure',
    required: [
        'SourceTableName',
        'TargetTableName',
    ],
    members: {
        SourceTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        TargetTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
        UseLatestRestorableTime: {
            shape: {
                type: 'boolean',
            },
        },
        RestoreDateTime: {
            shape: {
                type: 'timestamp',
            },
        },
    },
};