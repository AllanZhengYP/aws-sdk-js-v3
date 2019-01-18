import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_IdentityPoolShortDescription as _IdentityPoolShortDescription_Type} from '../types/_IdentityPoolShortDescription';
import {_IdentityPoolShortDescription} from './_IdentityPoolShortDescription';

export const _IdentityPoolsList: _ListModel_<_IdentityPoolShortDescription_Type, any> = {
    parse: (data: any): Array<_IdentityPoolShortDescription_Type> => {
        return (data as Array<_IdentityPoolShortDescription_Type>).map(_item => _IdentityPoolShortDescription.parse!(_item));
    },

    serialize: (input: Array<_IdentityPoolShortDescription_Type>): any => {
        return input.map(_item => _IdentityPoolShortDescription.serialize!(_item));
    },
};