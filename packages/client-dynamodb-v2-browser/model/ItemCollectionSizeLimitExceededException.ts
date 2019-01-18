import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {ItemCollectionSizeLimitExceededException as ItemCollectionSizeLimitExceededException_Type} from '../types/ItemCollectionSizeLimitExceededException';

export const ItemCollectionSizeLimitExceededException: _StructureModel_<ItemCollectionSizeLimitExceededException_Type, any> = {
    parse: (data: any): ItemCollectionSizeLimitExceededException_Type => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;
        return rtn as ItemCollectionSizeLimitExceededException_Type;
    },
    serialize: (data: ItemCollectionSizeLimitExceededException_Type): any => {
        let rtn: any = {};
        if (data.message) rtn.message = data.message;

        return rtn;
    },
};