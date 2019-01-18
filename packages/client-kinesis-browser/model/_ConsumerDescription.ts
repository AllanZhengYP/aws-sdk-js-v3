import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ConsumerDescription as _ConsumerDescription_Type} from '../types/_ConsumerDescription';

export const _ConsumerDescription: _StructureModel_<_ConsumerDescription_Type, any> = {
    parse: (data: any): _ConsumerDescription_Type => {
        let rtn: any = {};
        if (data.ConsumerName) rtn.ConsumerName = data.ConsumerName;
    if (data.ConsumerARN) rtn.ConsumerARN = data.ConsumerARN;
    if (data.ConsumerStatus) rtn.ConsumerStatus = data.ConsumerStatus;
    if (data.ConsumerCreationTimestamp) rtn.ConsumerCreationTimestamp = _toDate_(data.ConsumerCreationTimestamp);
    if (data.StreamARN) rtn.StreamARN = data.StreamARN;
        return rtn as _ConsumerDescription_Type;
    },
    serialize: (data: _ConsumerDescription_Type): any => {
    		if (!data.ConsumerName||!data.ConsumerARN||!data.ConsumerStatus||!data.ConsumerCreationTimestamp||!data.StreamARN) {
        throw new Error('_ConsumerDescription has missing required parameter');
    }
        let rtn: any = {};
        if (data.ConsumerName) rtn.ConsumerName = data.ConsumerName;

    if (data.ConsumerARN) rtn.ConsumerARN = data.ConsumerARN;

    if (data.ConsumerStatus) rtn.ConsumerStatus = data.ConsumerStatus;

    if (data.ConsumerCreationTimestamp) rtn.ConsumerCreationTimestamp = _toDate_(data.ConsumerCreationTimestamp);

    if (data.StreamARN) rtn.StreamARN = data.StreamARN;

        return rtn;
    },
};