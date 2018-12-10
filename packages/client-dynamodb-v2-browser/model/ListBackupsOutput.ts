import {_BackupSummaries} from './_BackupSummaries';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const ListBackupsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        BackupSummaries: {
            shape: _BackupSummaries,
        },
        LastEvaluatedBackupArn: {
            shape: {
                type: 'string',
                min: 37,
            },
        },
    },
};