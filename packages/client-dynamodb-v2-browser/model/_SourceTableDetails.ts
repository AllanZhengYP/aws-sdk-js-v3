import {_KeySchema} from './_KeySchema';
import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_SourceTableDetails as _SourceTableDetails_Type} from '../types/_SourceTableDetails';

export const _SourceTableDetails: _StructureModel_<_SourceTableDetails_Type, any> = {
    parse: (data: any): _SourceTableDetails_Type => {
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;
    if (data.TableId) rtn.TableId = data.TableId;
    if (data.TableArn) rtn.TableArn = data.TableArn;
    if (data.TableSizeBytes) rtn.TableSizeBytes = data.TableSizeBytes;
    if (data.KeySchema) rtn.KeySchema = _KeySchema.parse!(data.KeySchema);
    if (data.TableCreationDateTime) rtn.TableCreationDateTime = _toDate_(data.TableCreationDateTime);
    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughput.parse!(data.ProvisionedThroughput);
    if (data.ItemCount) rtn.ItemCount = data.ItemCount;
        return rtn as _SourceTableDetails_Type;
    },
    serialize: (data: _SourceTableDetails_Type): any => {
    		if (!data.TableName||!data.TableId||!data.KeySchema||!data.TableCreationDateTime||!data.ProvisionedThroughput) {
        throw new Error('_SourceTableDetails has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.TableId) rtn.TableId = data.TableId;

    if (data.TableArn) rtn.TableArn = data.TableArn;

    if (data.TableSizeBytes) rtn.TableSizeBytes = data.TableSizeBytes;

    if (data.KeySchema) rtn.KeySchema = _KeySchema.serialize!(data.KeySchema as any);

    if (data.TableCreationDateTime) rtn.TableCreationDateTime = _toDate_(data.TableCreationDateTime);

    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughput.serialize!(data.ProvisionedThroughput as any);

    if (data.ItemCount) rtn.ItemCount = data.ItemCount;

        return rtn;
    },
};