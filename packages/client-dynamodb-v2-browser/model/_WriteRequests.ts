import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_WriteRequest as _WriteRequest_Type} from '../types/_WriteRequest';
import {_WriteRequest} from './_WriteRequest';

export const _WriteRequests: _ListModel_<_WriteRequest_Type, any> = {
    parse: (data: any): Array<_WriteRequest_Type> => {
        return (data as Array<_WriteRequest_Type>).map(_item => _WriteRequest.parse!(_item));
    },

    serialize: (input: Array<_WriteRequest_Type>): any => {
        return input.map(_item => _WriteRequest.serialize!(_item));
    },
};