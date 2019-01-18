import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_ReplicaGlobalSecondaryIndexSettingsDescription as _ReplicaGlobalSecondaryIndexSettingsDescription_Type} from '../types/_ReplicaGlobalSecondaryIndexSettingsDescription';
import {_ReplicaGlobalSecondaryIndexSettingsDescription} from './_ReplicaGlobalSecondaryIndexSettingsDescription';

export const _ReplicaGlobalSecondaryIndexSettingsDescriptionList: _ListModel_<_ReplicaGlobalSecondaryIndexSettingsDescription_Type, any> = {
    parse: (data: any): Array<_ReplicaGlobalSecondaryIndexSettingsDescription_Type> => {
        return (data as Array<_ReplicaGlobalSecondaryIndexSettingsDescription_Type>).map(_item => _ReplicaGlobalSecondaryIndexSettingsDescription.parse!(_item));
    },

    serialize: (input: Array<_ReplicaGlobalSecondaryIndexSettingsDescription_Type>): any => {
        return input.map(_item => _ReplicaGlobalSecondaryIndexSettingsDescription.serialize!(_item));
    },
};