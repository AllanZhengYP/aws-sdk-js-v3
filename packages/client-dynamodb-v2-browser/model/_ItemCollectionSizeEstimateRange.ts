import {ListModel as _ListModel_} from '@aws-sdk/types';

export const _ItemCollectionSizeEstimateRange: _ListModel_<number, any> = {
    parse: (data: any): Array<number> => {
        return (data as Array<number>).map(_item => _item);
    },

    serialize: (input: Array<number>): any => {
        return input.map(_item => _item);
    },
};