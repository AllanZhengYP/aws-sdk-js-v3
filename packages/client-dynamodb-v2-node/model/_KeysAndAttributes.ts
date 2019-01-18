import {_KeyList} from './_KeyList';
import {_AttributeNameList} from './_AttributeNameList';
import {_ExpressionAttributeNameMap} from './_ExpressionAttributeNameMap';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_KeysAndAttributes as _KeysAndAttributes_Type} from '../types/_KeysAndAttributes';

export const _KeysAndAttributes: _StructureModel_<_KeysAndAttributes_Type, any> = {
    parse: (data: any): _KeysAndAttributes_Type => {
        let rtn: any = {};
        if (data.Keys) rtn.Keys = _KeyList.parse!(data.Keys);
    if (data.AttributesToGet) rtn.AttributesToGet = _AttributeNameList.parse!(data.AttributesToGet);
    if (data.ConsistentRead) rtn.ConsistentRead = data.ConsistentRead;
    if (data.ProjectionExpression) rtn.ProjectionExpression = data.ProjectionExpression;
    if (data.ExpressionAttributeNames) rtn.ExpressionAttributeNames = _ExpressionAttributeNameMap.parse!(data.ExpressionAttributeNames);
        return rtn as _KeysAndAttributes_Type;
    },
    serialize: (data: _KeysAndAttributes_Type): any => {
    		if (!data.Keys) {
        throw new Error('_KeysAndAttributes has missing required parameter');
    }
        let rtn: any = {};
        if (data.Keys) rtn.Keys = _KeyList.serialize!(data.Keys as any);

    if (data.AttributesToGet) rtn.AttributesToGet = _AttributeNameList.serialize!(data.AttributesToGet as any);

    if (data.ConsistentRead) rtn.ConsistentRead = data.ConsistentRead;

    if (data.ProjectionExpression) rtn.ProjectionExpression = data.ProjectionExpression;

    if (data.ExpressionAttributeNames) rtn.ExpressionAttributeNames = _ExpressionAttributeNameMap.serialize!(data.ExpressionAttributeNames as any);

        return rtn;
    },
};