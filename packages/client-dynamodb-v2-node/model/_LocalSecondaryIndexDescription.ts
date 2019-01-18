import {_KeySchema} from './_KeySchema';
import {_Projection} from './_Projection';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_LocalSecondaryIndexDescription as _LocalSecondaryIndexDescription_Type} from '../types/_LocalSecondaryIndexDescription';

export const _LocalSecondaryIndexDescription: _StructureModel_<_LocalSecondaryIndexDescription_Type, any> = {
    parse: (data: any): _LocalSecondaryIndexDescription_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
    if (data.KeySchema) rtn.KeySchema = _KeySchema.parse!(data.KeySchema);
    if (data.Projection) rtn.Projection = _Projection.parse!(data.Projection);
    if (data.IndexSizeBytes) rtn.IndexSizeBytes = data.IndexSizeBytes;
    if (data.ItemCount) rtn.ItemCount = data.ItemCount;
    if (data.IndexArn) rtn.IndexArn = data.IndexArn;
        return rtn as _LocalSecondaryIndexDescription_Type;
    },
    serialize: (data: _LocalSecondaryIndexDescription_Type): any => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.KeySchema) rtn.KeySchema = _KeySchema.serialize!(data.KeySchema as any);

    if (data.Projection) rtn.Projection = _Projection.serialize!(data.Projection as any);

    if (data.IndexSizeBytes) rtn.IndexSizeBytes = data.IndexSizeBytes;

    if (data.ItemCount) rtn.ItemCount = data.ItemCount;

    if (data.IndexArn) rtn.IndexArn = data.IndexArn;

        return rtn;
    },
};