import {_KeySchema} from './_KeySchema';
import {_Projection} from './_Projection';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_LocalSecondaryIndex as _LocalSecondaryIndex_Type} from '../types/_LocalSecondaryIndex';

export const _LocalSecondaryIndex: _StructureModel_<_LocalSecondaryIndex_Type, any> = {
    parse: (data: any): _LocalSecondaryIndex_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
    if (data.KeySchema) rtn.KeySchema = _KeySchema.parse!(data.KeySchema);
    if (data.Projection) rtn.Projection = _Projection.parse!(data.Projection);
        return rtn as _LocalSecondaryIndex_Type;
    },
    serialize: (data: _LocalSecondaryIndex_Type): any => {
    		if (!data.IndexName||!data.KeySchema||!data.Projection) {
        throw new Error('_LocalSecondaryIndex has missing required parameter');
    }
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.KeySchema) rtn.KeySchema = _KeySchema.serialize!(data.KeySchema as any);

    if (data.Projection) rtn.Projection = _Projection.serialize!(data.Projection as any);

        return rtn;
    },
};