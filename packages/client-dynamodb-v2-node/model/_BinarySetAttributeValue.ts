import {ListModel as _ListModel_} from '@aws-sdk/types';

export const _BinarySetAttributeValue: _ListModel_<Uint8Array, any> = {
    parse: (data: any): Array<Uint8Array> => {
        return (data as Array<Uint8Array>).map(_item => _item);
    },

    serialize: (input: Array<Uint8Array>): any => {
        return input.map(_item => _item);
    },
};