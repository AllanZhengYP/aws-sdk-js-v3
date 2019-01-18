import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_IdentityDescription as _IdentityDescription_Type} from '../types/_IdentityDescription';
import {_IdentityDescription} from './_IdentityDescription';

export const _IdentitiesList: _ListModel_<_IdentityDescription_Type, any> = {
    parse: (data: any): Array<_IdentityDescription_Type> => {
        return (data as Array<_IdentityDescription_Type>).map(_item => _IdentityDescription.parse!(_item));
    },

    serialize: (input: Array<_IdentityDescription_Type>): any => {
        return input.map(_item => _IdentityDescription.serialize!(_item));
    },
};