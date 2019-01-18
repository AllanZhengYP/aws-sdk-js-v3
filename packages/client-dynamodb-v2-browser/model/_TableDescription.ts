import {_AttributeDefinitions} from './_AttributeDefinitions';
import {_KeySchema} from './_KeySchema';
import {_ProvisionedThroughputDescription} from './_ProvisionedThroughputDescription';
import {_LocalSecondaryIndexDescriptionList} from './_LocalSecondaryIndexDescriptionList';
import {_GlobalSecondaryIndexDescriptionList} from './_GlobalSecondaryIndexDescriptionList';
import {_StreamSpecification} from './_StreamSpecification';
import {_RestoreSummary} from './_RestoreSummary';
import {_SSEDescription} from './_SSEDescription';
import {toDate as _toDate_} from '@aws-sdk/protocol-timestamp';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_TableDescription as _TableDescription_Type} from '../types/_TableDescription';

export const _TableDescription: _StructureModel_<_TableDescription_Type, any> = {
    parse: (data: any): _TableDescription_Type => {
        let rtn: any = {};
        if (data.AttributeDefinitions) rtn.AttributeDefinitions = _AttributeDefinitions.parse!(data.AttributeDefinitions);
    if (data.TableName) rtn.TableName = data.TableName;
    if (data.KeySchema) rtn.KeySchema = _KeySchema.parse!(data.KeySchema);
    if (data.TableStatus) rtn.TableStatus = data.TableStatus;
    if (data.CreationDateTime) rtn.CreationDateTime = _toDate_(data.CreationDateTime);
    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughputDescription.parse!(data.ProvisionedThroughput);
    if (data.TableSizeBytes) rtn.TableSizeBytes = data.TableSizeBytes;
    if (data.ItemCount) rtn.ItemCount = data.ItemCount;
    if (data.TableArn) rtn.TableArn = data.TableArn;
    if (data.TableId) rtn.TableId = data.TableId;
    if (data.LocalSecondaryIndexes) rtn.LocalSecondaryIndexes = _LocalSecondaryIndexDescriptionList.parse!(data.LocalSecondaryIndexes);
    if (data.GlobalSecondaryIndexes) rtn.GlobalSecondaryIndexes = _GlobalSecondaryIndexDescriptionList.parse!(data.GlobalSecondaryIndexes);
    if (data.StreamSpecification) rtn.StreamSpecification = _StreamSpecification.parse!(data.StreamSpecification);
    if (data.LatestStreamLabel) rtn.LatestStreamLabel = data.LatestStreamLabel;
    if (data.LatestStreamArn) rtn.LatestStreamArn = data.LatestStreamArn;
    if (data.RestoreSummary) rtn.RestoreSummary = _RestoreSummary.parse!(data.RestoreSummary);
    if (data.SSEDescription) rtn.SSEDescription = _SSEDescription.parse!(data.SSEDescription);
        return rtn as _TableDescription_Type;
    },
    serialize: (data: _TableDescription_Type): any => {
        let rtn: any = {};
        if (data.AttributeDefinitions) rtn.AttributeDefinitions = _AttributeDefinitions.serialize!(data.AttributeDefinitions as any);

    if (data.TableName) rtn.TableName = data.TableName;

    if (data.KeySchema) rtn.KeySchema = _KeySchema.serialize!(data.KeySchema as any);

    if (data.TableStatus) rtn.TableStatus = data.TableStatus;

    if (data.CreationDateTime) rtn.CreationDateTime = _toDate_(data.CreationDateTime);

    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughputDescription.serialize!(data.ProvisionedThroughput as any);

    if (data.TableSizeBytes) rtn.TableSizeBytes = data.TableSizeBytes;

    if (data.ItemCount) rtn.ItemCount = data.ItemCount;

    if (data.TableArn) rtn.TableArn = data.TableArn;

    if (data.TableId) rtn.TableId = data.TableId;

    if (data.LocalSecondaryIndexes) rtn.LocalSecondaryIndexes = _LocalSecondaryIndexDescriptionList.serialize!(data.LocalSecondaryIndexes as any);

    if (data.GlobalSecondaryIndexes) rtn.GlobalSecondaryIndexes = _GlobalSecondaryIndexDescriptionList.serialize!(data.GlobalSecondaryIndexes as any);

    if (data.StreamSpecification) rtn.StreamSpecification = _StreamSpecification.serialize!(data.StreamSpecification as any);

    if (data.LatestStreamLabel) rtn.LatestStreamLabel = data.LatestStreamLabel;

    if (data.LatestStreamArn) rtn.LatestStreamArn = data.LatestStreamArn;

    if (data.RestoreSummary) rtn.RestoreSummary = _RestoreSummary.serialize!(data.RestoreSummary as any);

    if (data.SSEDescription) rtn.SSEDescription = _SSEDescription.serialize!(data.SSEDescription as any);

        return rtn;
    },
};