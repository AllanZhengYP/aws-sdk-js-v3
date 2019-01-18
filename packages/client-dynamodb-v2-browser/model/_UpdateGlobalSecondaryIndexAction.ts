import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_UpdateGlobalSecondaryIndexAction as _UpdateGlobalSecondaryIndexAction_Type} from '../types/_UpdateGlobalSecondaryIndexAction';

export const _UpdateGlobalSecondaryIndexAction: _StructureModel_<_UpdateGlobalSecondaryIndexAction_Type, any> = {
    parse: (data: any): _UpdateGlobalSecondaryIndexAction_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughput.parse!(data.ProvisionedThroughput);
        return rtn as _UpdateGlobalSecondaryIndexAction_Type;
    },
    serialize: (data: _UpdateGlobalSecondaryIndexAction_Type): any => {
    		if (!data.IndexName||!data.ProvisionedThroughput) {
        throw new Error('_UpdateGlobalSecondaryIndexAction has missing required parameter');
    }
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughput.serialize!(data.ProvisionedThroughput as any);

        return rtn;
    },
};