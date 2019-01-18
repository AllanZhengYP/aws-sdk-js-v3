import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_ReplicaUpdate as _ReplicaUpdate_Type} from '../types/_ReplicaUpdate';
import {_ReplicaUpdate} from './_ReplicaUpdate';

export const _ReplicaUpdateList: _ListModel_<_ReplicaUpdate_Type, any> = {
    parse: (data: any): Array<_ReplicaUpdate_Type> => {
        return (data as Array<_ReplicaUpdate_Type>).map(_item => _ReplicaUpdate.parse!(_item));
    },

    serialize: (input: Array<_ReplicaUpdate_Type>): any => {
        return input.map(_item => _ReplicaUpdate.serialize!(_item));
    },
};