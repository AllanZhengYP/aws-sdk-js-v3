import {_KeySchema} from './_KeySchema';
import {_Projection} from './_Projection';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_LocalSecondaryIndexInfo as _LocalSecondaryIndexInfo_Type} from '../types/_LocalSecondaryIndexInfo';

export const _LocalSecondaryIndexInfo: _StructureModel_<_LocalSecondaryIndexInfo_Type, any> = {
    parse: (data: any): _LocalSecondaryIndexInfo_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
    if (data.KeySchema) rtn.KeySchema = _KeySchema.parse!(data.KeySchema);
    if (data.Projection) rtn.Projection = _Projection.parse!(data.Projection);
        return rtn as _LocalSecondaryIndexInfo_Type;
    },
    serialize: (data: _LocalSecondaryIndexInfo_Type): any => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.KeySchema) rtn.KeySchema = _KeySchema.serialize!(data.KeySchema as any);

    if (data.Projection) rtn.Projection = _Projection.serialize!(data.Projection as any);

        return rtn;
    },
};