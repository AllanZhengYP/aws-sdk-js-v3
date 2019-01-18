import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_Replica as _Replica_Type} from '../types/_Replica';
import {_Replica} from './_Replica';

export const _ReplicaList: _ListModel_<_Replica_Type, any> = {
    parse: (data: any): Array<_Replica_Type> => {
        return (data as Array<_Replica_Type>).map(_item => _Replica.parse!(_item));
    },

    serialize: (input: Array<_Replica_Type>): any => {
        return input.map(_item => _Replica.serialize!(_item));
    },
};