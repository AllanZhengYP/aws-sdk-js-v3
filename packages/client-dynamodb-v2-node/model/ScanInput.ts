import {_AttributeNameList} from './_AttributeNameList';
import {_FilterConditionMap} from './_FilterConditionMap';
import {_Key} from './_Key';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {_ExpressionAttributeValueMap} from './_ExpressionAttributeValueMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ScanInput as ScanInput_Type} from '../types/ScanInput';

export const ScanInput: _OperationInputShapeModel_<ScanInput_Type, any> = {
    serialize: (data: ScanInput_Type): any => {
    		if (!data.TableName) {
        throw new Error('ScanInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.IndexName) rtn.IndexName = data.IndexName;

    if (data.AttributesToGet) rtn.AttributesToGet = _AttributeNameList.serialize!(data.AttributesToGet as any);

    if (data.Limit) rtn.Limit = data.Limit;

    if (data.Select) rtn.Select = data.Select;

    if (data.ScanFilter) rtn.ScanFilter = _FilterConditionMap.serialize!(data.ScanFilter as any);

    if (data.ConditionalOperator) rtn.ConditionalOperator = data.ConditionalOperator;

    if (data.ExclusiveStartKey) rtn.ExclusiveStartKey = _Key.serialize!(data.ExclusiveStartKey as any);

    if (data.ReturnConsumedCapacity) rtn.ReturnConsumedCapacity = data.ReturnConsumedCapacity;

    if (data.TotalSegments) rtn.TotalSegments = data.TotalSegments;

    if (data.Segment) rtn.Segment = data.Segment;

    if (data.ProjectionExpression) rtn.ProjectionExpression = data.ProjectionExpression;

    if (data.FilterExpression) rtn.FilterExpression = data.FilterExpression;

    if (data.ExpressionAttributeNames) rtn.ExpressionAttributeNames = _ExpressionAttributeNameMap.serialize!(data.ExpressionAttributeNames as any);

    if (data.ExpressionAttributeValues) rtn.ExpressionAttributeValues = _ExpressionAttributeValueMap.serialize!(data.ExpressionAttributeValues as any);

    if (data.ConsistentRead) rtn.ConsistentRead = data.ConsistentRead;

        return rtn;
    },
};