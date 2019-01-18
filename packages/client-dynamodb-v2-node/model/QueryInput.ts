import {_AttributeNameList} from './_AttributeNameList';
import {_KeyConditions} from './_KeyConditions';
import {_FilterConditionMap} from './_FilterConditionMap';
import {_Key} from './_Key';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {_ExpressionAttributeValueMap} from './_ExpressionAttributeValueMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {QueryInput as QueryInput_Type} from '../types/QueryInput';

export const QueryInput: _OperationInputShapeModel_<QueryInput_Type, any> = {
    serialize: (data: QueryInput_Type): any => {
    		if (!data.TableName) {
        throw new Error('QueryInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.Select) rtn.Select = data.Select;

    if (data.AttributesToGet) rtn.AttributesToGet = _AttributeNameList.serialize!(data.AttributesToGet as any);

    if (data.Limit) rtn.Limit = data.Limit;

    if (data.ConsistentRead) rtn.ConsistentRead = data.ConsistentRead;

    if (data.KeyConditions) rtn.KeyConditions = _KeyConditions.serialize!(data.KeyConditions as any);

    if (data.QueryFilter) rtn.QueryFilter = _FilterConditionMap.serialize!(data.QueryFilter as any);

    if (data.ConditionalOperator) rtn.ConditionalOperator = data.ConditionalOperator;

    if (data.ScanIndexForward) rtn.ScanIndexForward = data.ScanIndexForward;

    if (data.ExclusiveStartKey) rtn.ExclusiveStartKey = _Key.serialize!(data.ExclusiveStartKey as any);

    if (data.ReturnConsumedCapacity) rtn.ReturnConsumedCapacity = data.ReturnConsumedCapacity;

    if (data.ProjectionExpression) rtn.ProjectionExpression = data.ProjectionExpression;

    if (data.FilterExpression) rtn.FilterExpression = data.FilterExpression;

    if (data.KeyConditionExpression) rtn.KeyConditionExpression = data.KeyConditionExpression;

    if (data.ExpressionAttributeNames) rtn.ExpressionAttributeNames = _ExpressionAttributeNameMap.serialize!(data.ExpressionAttributeNames as any);

    if (data.ExpressionAttributeValues) rtn.ExpressionAttributeValues = _ExpressionAttributeValueMap.serialize!(data.ExpressionAttributeValues as any);

        return rtn;
    },
};