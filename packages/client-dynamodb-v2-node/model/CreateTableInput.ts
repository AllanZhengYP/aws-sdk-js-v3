import {_AttributeDefinitions} from './_AttributeDefinitions';
import {_KeySchema} from './_KeySchema';
import {_LocalSecondaryIndexList} from './_LocalSecondaryIndexList';
import {_GlobalSecondaryIndexList} from './_GlobalSecondaryIndexList';
import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {_StreamSpecification} from './_StreamSpecification';
import {_SSESpecification} from './_SSESpecification';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {CreateTableInput as CreateTableInput_Type} from '../types/CreateTableInput';

export const CreateTableInput: _OperationInputShapeModel_<CreateTableInput_Type, any> = {
    serialize: (data: CreateTableInput_Type): any => {
    		if (!data.AttributeDefinitions||!data.TableName||!data.KeySchema||!data.ProvisionedThroughput) {
        throw new Error('CreateTableInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.AttributeDefinitions) rtn.AttributeDefinitions = _AttributeDefinitions.serialize!(data.AttributeDefinitions as any);

    if (data.TableName) rtn.TableName = data.TableName;

    if (data.KeySchema) rtn.KeySchema = _KeySchema.serialize!(data.KeySchema as any);

    if (data.LocalSecondaryIndexes) rtn.LocalSecondaryIndexes = _LocalSecondaryIndexList.serialize!(data.LocalSecondaryIndexes as any);

    if (data.GlobalSecondaryIndexes) rtn.GlobalSecondaryIndexes = _GlobalSecondaryIndexList.serialize!(data.GlobalSecondaryIndexes as any);

    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughput.serialize!(data.ProvisionedThroughput as any);

    if (data.StreamSpecification) rtn.StreamSpecification = _StreamSpecification.serialize!(data.StreamSpecification as any);

    if (data.SSESpecification) rtn.SSESpecification = _SSESpecification.serialize!(data.SSESpecification as any);

        return rtn;
    },
};