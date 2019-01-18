import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_ReplicaSettingsUpdate as _ReplicaSettingsUpdate_Type} from '../types/_ReplicaSettingsUpdate';
import {_ReplicaSettingsUpdate} from './_ReplicaSettingsUpdate';

export const _ReplicaSettingsUpdateList: _ListModel_<_ReplicaSettingsUpdate_Type, any> = {
    parse: (data: any): Array<_ReplicaSettingsUpdate_Type> => {
        return (data as Array<_ReplicaSettingsUpdate_Type>).map(_item => _ReplicaSettingsUpdate.parse!(_item));
    },

    serialize: (input: Array<_ReplicaSettingsUpdate_Type>): any => {
        return input.map(_item => _ReplicaSettingsUpdate.serialize!(_item));
    },
};