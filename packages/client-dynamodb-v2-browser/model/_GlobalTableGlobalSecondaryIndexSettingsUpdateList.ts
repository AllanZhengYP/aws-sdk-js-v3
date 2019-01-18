import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_GlobalTableGlobalSecondaryIndexSettingsUpdate as _GlobalTableGlobalSecondaryIndexSettingsUpdate_Type} from '../types/_GlobalTableGlobalSecondaryIndexSettingsUpdate';
import {_GlobalTableGlobalSecondaryIndexSettingsUpdate} from './_GlobalTableGlobalSecondaryIndexSettingsUpdate';

export const _GlobalTableGlobalSecondaryIndexSettingsUpdateList: _ListModel_<_GlobalTableGlobalSecondaryIndexSettingsUpdate_Type, any> = {
    parse: (data: any): Array<_GlobalTableGlobalSecondaryIndexSettingsUpdate_Type> => {
        return (data as Array<_GlobalTableGlobalSecondaryIndexSettingsUpdate_Type>).map(_item => _GlobalTableGlobalSecondaryIndexSettingsUpdate.parse!(_item));
    },

    serialize: (input: Array<_GlobalTableGlobalSecondaryIndexSettingsUpdate_Type>): any => {
        return input.map(_item => _GlobalTableGlobalSecondaryIndexSettingsUpdate.serialize!(_item));
    },
};