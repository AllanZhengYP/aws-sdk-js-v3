import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_BackupSummary as _BackupSummary_Type} from '../types/_BackupSummary';
import {_BackupSummary} from './_BackupSummary';

export const _BackupSummaries: _ListModel_<_BackupSummary_Type, any> = {
    parse: (data: any): Array<_BackupSummary_Type> => {
        return (data as Array<_BackupSummary_Type>).map(_item => _BackupSummary.parse!(_item));
    },

    serialize: (input: Array<_BackupSummary_Type>): any => {
        return input.map(_item => _BackupSummary.serialize!(_item));
    },
};