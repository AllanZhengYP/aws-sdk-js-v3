import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_DeleteReplicaAction as _DeleteReplicaAction_Type} from '../types/_DeleteReplicaAction';

export const _DeleteReplicaAction: _StructureModel_<_DeleteReplicaAction_Type, any> = {
    parse: (data: any): _DeleteReplicaAction_Type => {
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;
        return rtn as _DeleteReplicaAction_Type;
    },
    serialize: (data: _DeleteReplicaAction_Type): any => {
    		if (!data.RegionName) {
        throw new Error('_DeleteReplicaAction has missing required parameter');
    }
        let rtn: any = {};
        if (data.RegionName) rtn.RegionName = data.RegionName;

        return rtn;
    },
};