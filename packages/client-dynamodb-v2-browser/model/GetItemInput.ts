import {_Key} from './_Key';
import {_AttributeNameList} from './_AttributeNameList';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {GetItemInput as GetItemInput_Type} from '../types/GetItemInput';

export const GetItemInput: _OperationInputShapeModel_<GetItemInput_Type, any> = {
    serialize: (data: GetItemInput_Type): any => {
    		if (!data.TableName||!data.Key) {
        throw new Error('GetItemInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.Key) rtn.Key = _Key.serialize!(data.Key as any);

    if (data.AttributesToGet) rtn.AttributesToGet = _AttributeNameList.serialize!(data.AttributesToGet as any);

    if (data.ConsistentRead) rtn.ConsistentRead = data.ConsistentRead;

    if (data.ReturnConsumedCapacity) rtn.ReturnConsumedCapacity = data.ReturnConsumedCapacity;

    if (data.ProjectionExpression) rtn.ProjectionExpression = data.ProjectionExpression;

    if (data.ExpressionAttributeNames) rtn.ExpressionAttributeNames = _ExpressionAttributeNameMap.serialize!(data.ExpressionAttributeNames as any);

        return rtn;
    },
};