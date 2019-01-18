import {_SubscribeToShardEvent} from './_SubscribeToShardEvent';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_SubscribeToShardEventStream as _SubscribeToShardEventStream_Type} from '../types/_SubscribeToShardEventStream';

export const _SubscribeToShardEventStream: _StructureModel_<_SubscribeToShardEventStream_Type, any> = {
    parse: (data: any): _SubscribeToShardEventStream_Type => {
        let rtn: any = {};
        if (data.SubscribeToShardEvent) rtn.SubscribeToShardEvent = _SubscribeToShardEvent.parse!(data.SubscribeToShardEvent);
        return rtn as _SubscribeToShardEventStream_Type;
    },
    serialize: (data: _SubscribeToShardEventStream_Type): any => {
    		if (!data.SubscribeToShardEvent) {
        throw new Error('_SubscribeToShardEventStream has missing required parameter');
    }
        let rtn: any = {};
        if (data.SubscribeToShardEvent) rtn.SubscribeToShardEvent = _SubscribeToShardEvent.serialize!(data.SubscribeToShardEvent as any);

        return rtn;
    },
};