import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_ReplicaSettingsDescription as _ReplicaSettingsDescription_Type} from '../types/_ReplicaSettingsDescription';
import {_ReplicaSettingsDescription} from './_ReplicaSettingsDescription';

export const _ReplicaSettingsDescriptionList: _ListModel_<_ReplicaSettingsDescription_Type, any> = {
    parse: (data: any): Array<_ReplicaSettingsDescription_Type> => {
        return (data as Array<_ReplicaSettingsDescription_Type>).map(_item => _ReplicaSettingsDescription.parse!(_item));
    },

    serialize: (input: Array<_ReplicaSettingsDescription_Type>): any => {
        return input.map(_item => _ReplicaSettingsDescription.serialize!(_item));
    },
};