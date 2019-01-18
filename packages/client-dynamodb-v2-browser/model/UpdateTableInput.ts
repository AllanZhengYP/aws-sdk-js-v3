import {_AttributeDefinitions} from './_AttributeDefinitions';
import {_ProvisionedThroughput} from './_ProvisionedThroughput';
import {_GlobalSecondaryIndexUpdateList} from './_GlobalSecondaryIndexUpdateList';
import {_StreamSpecification} from './_StreamSpecification';
import {_SSESpecification} from './_SSESpecification';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {UpdateTableInput as UpdateTableInput_Type} from '../types/UpdateTableInput';

export const UpdateTableInput: _OperationInputShapeModel_<UpdateTableInput_Type, any> = {
    serialize: (data: UpdateTableInput_Type): any => {
    		if (!data.TableName) {
        throw new Error('UpdateTableInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.AttributeDefinitions) rtn.AttributeDefinitions = _AttributeDefinitions.serialize!(data.AttributeDefinitions as any);

    if (data.TableName) rtn.TableName = data.TableName;

    if (data.ProvisionedThroughput) rtn.ProvisionedThroughput = _ProvisionedThroughput.serialize!(data.ProvisionedThroughput as any);

    if (data.GlobalSecondaryIndexUpdates) rtn.GlobalSecondaryIndexUpdates = _GlobalSecondaryIndexUpdateList.serialize!(data.GlobalSecondaryIndexUpdates as any);

    if (data.StreamSpecification) rtn.StreamSpecification = _StreamSpecification.serialize!(data.StreamSpecification as any);

    if (data.SSESpecification) rtn.SSESpecification = _SSESpecification.serialize!(data.SSESpecification as any);

        return rtn;
    },
};