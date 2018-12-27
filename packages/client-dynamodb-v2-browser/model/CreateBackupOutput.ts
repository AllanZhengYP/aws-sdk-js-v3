import {_BackupDetails} from './_BackupDetails';
import {Structure as _Structure_} from '@aws-js-sdk-v3-prerelease/types';

export const CreateBackupOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        BackupDetails: {
            shape: _BackupDetails,
        },
    },
};