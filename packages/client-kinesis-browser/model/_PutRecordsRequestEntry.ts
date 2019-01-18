import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_PutRecordsRequestEntry as _PutRecordsRequestEntry_Type} from '../types/_PutRecordsRequestEntry';

export const _PutRecordsRequestEntry: _StructureModel_<_PutRecordsRequestEntry_Type, any> = {
    parse: (data: any): _PutRecordsRequestEntry_Type => {
        let rtn: any = {};
        if (data.Data) rtn.Data = data.Data;
    if (data.ExplicitHashKey) rtn.ExplicitHashKey = data.ExplicitHashKey;
    if (data.PartitionKey) rtn.PartitionKey = data.PartitionKey;
        return rtn as _PutRecordsRequestEntry_Type;
    },
    serialize: (data: _PutRecordsRequestEntry_Type): any => {
    		if (!data.Data||!data.PartitionKey) {
        throw new Error('_PutRecordsRequestEntry has missing required parameter');
    }
        let rtn: any = {};
        if (data.Data) rtn.Data = data.Data;

    if (data.ExplicitHashKey) rtn.ExplicitHashKey = data.ExplicitHashKey;

    if (data.PartitionKey) rtn.PartitionKey = data.PartitionKey;

        return rtn;
    },
};