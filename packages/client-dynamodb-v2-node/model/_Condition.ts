import {_AttributeValueList} from './_AttributeValueList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Condition as _Condition_Type} from '../types/_Condition';

export const _Condition: _StructureModel_<_Condition_Type, any> = {
    parse: (data: any): _Condition_Type => {
        let rtn: any = {};
        if (data.AttributeValueList) rtn.AttributeValueList = _AttributeValueList.parse!(data.AttributeValueList);
    if (data.ComparisonOperator) rtn.ComparisonOperator = data.ComparisonOperator;
        return rtn as _Condition_Type;
    },
    serialize: (data: _Condition_Type): any => {
    		if (!data.ComparisonOperator) {
        throw new Error('_Condition has missing required parameter');
    }
        let rtn: any = {};
        if (data.AttributeValueList) rtn.AttributeValueList = _AttributeValueList.serialize!(data.AttributeValueList as any);

    if (data.ComparisonOperator) rtn.ComparisonOperator = data.ComparisonOperator;

        return rtn;
    },
};