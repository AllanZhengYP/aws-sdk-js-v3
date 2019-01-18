import {_KeySchema} from './_KeySchema';
import {_Projection} from './_Projection';
import {_ProvisionedThroughputDescription} from './_ProvisionedThroughputDescription';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_GlobalSecondaryIndexDescription as _GlobalSecondaryIndexDescription_Type} from '../types/_GlobalSecondaryIndexDescription';

export const _GlobalSecondaryIndexDescription: _StructureModel_<_GlobalSecondaryIndexDescription_Type, any> = {
    parse: (data: any): _GlobalSecondaryIndexDescription_Type => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;
    if (data.KeySchema) rtn.KeySchema = _KeySchema.parse!(data.KeySchema);
    if (data.Projection) rtn.Projection = _Projection.parse!(data.Projection);
    if (data.IndexStatus) rtn.IndexStatus = data.IndexStatus;
    if (data.Backfilling) rtn.Backfilling = data.Backfilling;
    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughputDescription.parse!(data.ProvisionedThroughput);
    if (data.IndexSizeBytes) rtn.IndexSizeBytes = data.IndexSizeBytes;
    if (data.ItemCount) rtn.ItemCount = data.ItemCount;
    if (data.IndexArn) rtn.IndexArn = data.IndexArn;
        return rtn as _GlobalSecondaryIndexDescription_Type;
    },
    serialize: (data: _GlobalSecondaryIndexDescription_Type): any => {
        let rtn: any = {};
        if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.KeySchema) rtn.KeySchema = _KeySchema.serialize!(data.KeySchema as any);

    if (data.Projection) rtn.Projection = _Projection.serialize!(data.Projection as any);

    if (data.IndexStatus) rtn.IndexStatus = data.IndexStatus;

    if (data.Backfilling) rtn.Backfilling = data.Backfilling;

    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughputDescription.serialize!(data.ProvisionedThroughput as any);

    if (data.IndexSizeBytes) rtn.IndexSizeBytes = data.IndexSizeBytes;

    if (data.ItemCount) rtn.ItemCount = data.ItemCount;

    if (data.IndexArn) rtn.IndexArn = data.IndexArn;

        return rtn;
    },
};