import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_UnprocessedIdentityId as _UnprocessedIdentityId_Type} from '../types/_UnprocessedIdentityId';
import {_UnprocessedIdentityId} from './_UnprocessedIdentityId';

export const _UnprocessedIdentityIdList: _ListModel_<_UnprocessedIdentityId_Type, any> = {
    parse: (data: any): Array<_UnprocessedIdentityId_Type> => {
        return (data as Array<_UnprocessedIdentityId_Type>).map(_item => _UnprocessedIdentityId.parse!(_item));
    },

    serialize: (input: Array<_UnprocessedIdentityId_Type>): any => {
        return input.map(_item => _UnprocessedIdentityId.serialize!(_item));
    },
};