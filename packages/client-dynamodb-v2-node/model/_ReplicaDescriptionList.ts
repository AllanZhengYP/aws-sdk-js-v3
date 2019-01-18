import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_ReplicaDescription as _ReplicaDescription_Type} from '../types/_ReplicaDescription';
import {_ReplicaDescription} from './_ReplicaDescription';

export const _ReplicaDescriptionList: _ListModel_<_ReplicaDescription_Type, any> = {
    parse: (data: any): Array<_ReplicaDescription_Type> => {
        return (data as Array<_ReplicaDescription_Type>).map(_item => _ReplicaDescription.parse!(_item));
    },

    serialize: (input: Array<_ReplicaDescription_Type>): any => {
        return input.map(_item => _ReplicaDescription.serialize!(_item));
    },
};