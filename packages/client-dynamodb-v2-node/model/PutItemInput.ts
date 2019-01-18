import {_PutItemInputAttributeMap} from './_PutItemInputAttributeMap';
import {_ExpectedAttributeMap} from './_ExpectedAttributeMap';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {_ExpressionAttributeValueMap} from './_ExpressionAttributeValueMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {PutItemInput as PutItemInput_Type} from '../types/PutItemInput';

export const PutItemInput: _OperationInputShapeModel_<PutItemInput_Type, any> = {
    serialize: (data: PutItemInput_Type): any => {
    		if (!data.TableName||!data.Item) {
        throw new Error('PutItemInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.Item) rtn.Item = _PutItemInputAttributeMap.serialize!(data.Item as any);

    if (data.Expected) rtn.Expected = _ExpectedAttributeMap.serialize!(data.Expected as any);

    if (data.ReturnValues) rtn.ReturnValues = data.ReturnValues;

    if (data.ReturnConsumedCapacity) rtn.ReturnConsumedCapacity = data.ReturnConsumedCapacity;

    if (data.ReturnItemCollectionMetrics) rtn.ReturnItemCollectionMetrics = data.ReturnItemCollectionMetrics;

    if (data.ConditionalOperator) rtn.ConditionalOperator = data.ConditionalOperator;

    if (data.ConditionExpression) rtn.ConditionExpression = data.ConditionExpression;

    if (data.ExpressionAttributeNames) rtn.ExpressionAttributeNames = _ExpressionAttributeNameMap.serialize!(data.ExpressionAttributeNames as any);

    if (data.ExpressionAttributeValues) rtn.ExpressionAttributeValues = _ExpressionAttributeValueMap.serialize!(data.ExpressionAttributeValues as any);

        return rtn;
    },
};