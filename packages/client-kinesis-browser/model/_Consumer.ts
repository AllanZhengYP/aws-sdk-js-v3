import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Consumer as _Consumer_Type} from '../types/_Consumer';

export const _Consumer: _StructureModel_<_Consumer_Type, any> = {
    parse: (data: any): _Consumer_Type => {
        let rtn: any = {};
        if (data.ConsumerName) rtn.ConsumerName = data.ConsumerName;
    if (data.ConsumerARN) rtn.ConsumerARN = data.ConsumerARN;
    if (data.ConsumerStatus) rtn.ConsumerStatus = data.ConsumerStatus;
    if (data.ConsumerCreationTimestamp) rtn.ConsumerCreationTimestamp = _toDate_(data.ConsumerCreationTimestamp);
        return rtn as _Consumer_Type;
    },
    serialize: (data: _Consumer_Type): any => {
    		if (!data.ConsumerName||!data.ConsumerARN||!data.ConsumerStatus||!data.ConsumerCreationTimestamp) {
        throw new Error('_Consumer has missing required parameter');
    }
        let rtn: any = {};
        if (data.ConsumerName) rtn.ConsumerName = data.ConsumerName;

    if (data.ConsumerARN) rtn.ConsumerARN = data.ConsumerARN;

    if (data.ConsumerStatus) rtn.ConsumerStatus = data.ConsumerStatus;

    if (data.ConsumerCreationTimestamp) rtn.ConsumerCreationTimestamp = _toDate_(data.ConsumerCreationTimestamp);

        return rtn;
    },
};