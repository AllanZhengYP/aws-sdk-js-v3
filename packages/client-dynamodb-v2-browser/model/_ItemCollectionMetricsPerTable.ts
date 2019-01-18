import {MapModel as _MapModel_} from '@aws-sdk/types';
import {_ItemCollectionMetricsMultiple} from './_ItemCollectionMetricsMultiple';
import {_ItemCollectionMetricsMultiple as _ItemCollectionMetricsMultiple_Type} from '../types/_ItemCollectionMetricsMultiple';

export const _ItemCollectionMetricsPerTable: _MapModel_<_ItemCollectionMetricsMultiple_Type, any> = {
    parse: (data: any): {[key: string]: _ItemCollectionMetricsMultiple_Type} => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _ItemCollectionMetricsMultiple.parse!(data[key]);
        }
        return rtn as {[key: string]: _ItemCollectionMetricsMultiple_Type};
    },
    serialize: (data: {[key: string]: _ItemCollectionMetricsMultiple_Type}): any => {
        let rtn: any = {};
        for (const key of Object.keys(data)) {
            rtn[key] = _ItemCollectionMetricsMultiple.parse!(data[key]);
        }
        return rtn;
    },
};