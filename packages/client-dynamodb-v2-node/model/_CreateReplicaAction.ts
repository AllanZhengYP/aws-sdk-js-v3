import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_CreateReplicaAction as _CreateReplicaAction_Type} from '../types/_CreateReplicaAction';

export const _CreateReplicaAction: _StructureModel_<_CreateReplicaAction_Type, any> = {
    parse: (data: any): _CreateReplicaAction_Type => {
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;
        return rtn as _CreateReplicaAction_Type;
    },
    serialize: (data: _CreateReplicaAction_Type): any => {
    		if (!data.RegionName) {
        throw new Error('_CreateReplicaAction has missing required parameter');
    }
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;

        return rtn;
    },
};