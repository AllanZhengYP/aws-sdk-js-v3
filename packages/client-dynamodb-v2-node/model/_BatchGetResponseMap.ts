import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_ItemList} from './_ItemList';
import {_ItemList as _ItemList_Type} from '../types/_ItemList';

export const _BatchGetResponseMap: _MapModel_<_ItemList_Type, any> = {
    parse: (data: any): {[key: string]: _ItemList_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _ItemList.parse!(data[key]);
        }
        return rtn as {[key: string]: _ItemList_Type};
    },
    serialize: (data: {[key: string]: _ItemList_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _ItemList.parse!(data[key]);
        }
        return rtn;
    },
};