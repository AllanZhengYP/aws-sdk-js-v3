import {_ItemCollectionKeyAttributeMap} from './_ItemCollectionKeyAttributeMap';
import {_ItemCollectionSizeEstimateRange} from './_ItemCollectionSizeEstimateRange';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ItemCollectionMetrics as _ItemCollectionMetrics_Type} from '../types/_ItemCollectionMetrics';

export const _ItemCollectionMetrics: _StructureModel_<_ItemCollectionMetrics_Type, any> = {
    parse: (data: any): _ItemCollectionMetrics_Type => {
        let rtn: any = {};
        if (data.ItemCollectionKey) rtn.ItemCollectionKey = _ItemCollectionKeyAttributeMap.parse!(data.ItemCollectionKey);
    if (data.SizeEstimateRangeGB) rtn.SizeEstimateRangeGB = _ItemCollectionSizeEstimateRange.parse!(data.SizeEstimateRangeGB);
        return rtn as _ItemCollectionMetrics_Type;
    },
    serialize: (data: _ItemCollectionMetrics_Type): any => {
        let rtn: any = {};
        if (data.ItemCollectionKey) rtn.ItemCollectionKey = _ItemCollectionKeyAttributeMap.serialize!(data.ItemCollectionKey as any);

    if (data.SizeEstimateRangeGB) rtn.SizeEstimateRangeGB = _ItemCollectionSizeEstimateRange.serialize!(data.SizeEstimateRangeGB as any);

        return rtn;
    },
};