import {List as _List_} from '@aws-js-sdk-v3-prerelease/types';
import {_BackupSummary} from './_BackupSummary';

export const _BackupSummaries: _List_ = {
    type: 'list',
    member: {
        shape: _BackupSummary,
    },
};