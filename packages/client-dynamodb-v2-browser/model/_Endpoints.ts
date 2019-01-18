import {ListModel as _ListModel_} from '@aws-sdk/types';
import {_Endpoint as _Endpoint_Type} from '../types/_Endpoint';
import {_Endpoint} from './_Endpoint';

export const _Endpoints: _ListModel_<_Endpoint_Type, any> = {
    parse: (data: any): Array<_Endpoint_Type> => {
        return (data as Array<_Endpoint_Type>).map(_item => _Endpoint.parse!(_item));
    },

    serialize: (input: Array<_Endpoint_Type>): any => {
        return input.map(_item => _Endpoint.serialize!(_item));
    },
};