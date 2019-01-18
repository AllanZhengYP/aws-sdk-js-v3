import {_KeySchema} from './_KeySchema';
import {_Projection} from './_Projection';
import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_CreateGlobalSecondaryIndexAction as _CreateGlobalSecondaryIndexAction_Type} from '../types/_CreateGlobalSecondaryIndexAction';

export const _CreateGlobalSecondaryIndexAction: _StructureModel_<_CreateGlobalSecondaryIndexAction_Type, any> = {
    parse: (data: any): _CreateGlobalSecondaryIndexAction_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
    if (data.KeySchema) rtn.KeySchema = _KeySchema.parse!(data.KeySchema);
    if (data.Projection) rtn.Projection = _Projection.parse!(data.Projection);
    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughput.parse!(data.ProvisionedThroughput);
        return rtn as _CreateGlobalSecondaryIndexAction_Type;
    },
    serialize: (data: _CreateGlobalSecondaryIndexAction_Type): any => {
    		if (!data.IndexName||!data.KeySchema||!data.Projection||!data.ProvisionedThroughput) {
        throw new Error('_CreateGlobalSecondaryIndexAction has missing required parameter');
    }
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.KeySchema) rtn.KeySchema = _KeySchema.serialize!(data.KeySchema as any);

    if (data.Projection) rtn.Projection = _Projection.serialize!(data.Projection as any);

    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughput.serialize!(data.ProvisionedThroughput as any);

        return rtn;
    },
};