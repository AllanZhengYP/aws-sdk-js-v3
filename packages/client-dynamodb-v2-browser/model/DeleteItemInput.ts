import {_Key} from './_Key';
import {_ExpectedAttributeMap} from './_ExpectedAttributeMap';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {_ExpressionAttributeValueMap} from './_ExpressionAttributeValueMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DeleteItemInput as DeleteItemInput_Type} from '../types/DeleteItemInput';

export const DeleteItemInput: _OperationInputShapeModel_<DeleteItemInput_Type, any> = {
    serialize: (data: DeleteItemInput_Type): any => {
    		if (!data.TableName||!data.Key) {
        throw new Error('DeleteItemInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.Key) rtn.Key = _Key.serialize!(data.Key as any);

    if (data.Expected) rtn.Expected = _ExpectedAttributeMap.serialize!(data.Expected as any);

    if (data.ConditionalOperator) rtn.ConditionalOperator = data.ConditionalOperator;

    if (data.ReturnValues) rtn.ReturnValues = data.ReturnValues;

    if (data.ReturnConsumedCapacity) rtn.ReturnConsumedCapacity = data.ReturnConsumedCapacity;

    if (data.ReturnItemCollectionMetrics) rtn.ReturnItemCollectionMetrics = data.ReturnItemCollectionMetrics;

    if (data.ConditionExpression) rtn.ConditionExpression = data.ConditionExpression;

    if (data.ExpressionAttributeNames) rtn.ExpressionAttributeNames = _ExpressionAttributeNameMap.serialize!(data.ExpressionAttributeNames as any);

    if (data.ExpressionAttributeValues) rtn.ExpressionAttributeValues = _ExpressionAttributeValueMap.serialize!(data.ExpressionAttributeValues as any);

        return rtn;
    },
};