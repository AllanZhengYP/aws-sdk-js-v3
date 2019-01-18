import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_ReplicaGlobalSecondaryIndexSettingsUpdate as _ReplicaGlobalSecondaryIndexSettingsUpdate_Type} from '../types/_ReplicaGlobalSecondaryIndexSettingsUpdate';
import {_ReplicaGlobalSecondaryIndexSettingsUpdate} from './_ReplicaGlobalSecondaryIndexSettingsUpdate';

export const _ReplicaGlobalSecondaryIndexSettingsUpdateList: _ListModel_<_ReplicaGlobalSecondaryIndexSettingsUpdate_Type, any> = {
    parse: (data: any): Array<_ReplicaGlobalSecondaryIndexSettingsUpdate_Type> => {
        return (data as Array<_ReplicaGlobalSecondaryIndexSettingsUpdate_Type>).map(_item => _ReplicaGlobalSecondaryIndexSettingsUpdate.parse!(_item));
    },

    serialize: (input: Array<_ReplicaGlobalSecondaryIndexSettingsUpdate_Type>): any => {
        return input.map(_item => _ReplicaGlobalSecondaryIndexSettingsUpdate.serialize!(_item));
    },
};