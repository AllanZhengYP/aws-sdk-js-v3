import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_DeleteGlobalSecondaryIndexAction as _DeleteGlobalSecondaryIndexAction_Type} from '../types/_DeleteGlobalSecondaryIndexAction';

export const _DeleteGlobalSecondaryIndexAction: _StructureModel_<_DeleteGlobalSecondaryIndexAction_Type, any> = {
    parse: (data: any): _DeleteGlobalSecondaryIndexAction_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
        return rtn as _DeleteGlobalSecondaryIndexAction_Type;
    },
    serialize: (data: _DeleteGlobalSecondaryIndexAction_Type): any => {
    		if (!data.IndexName) {
        throw new Error('_DeleteGlobalSecondaryIndexAction has missing required parameter');
    }
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

        return rtn;
    },
};