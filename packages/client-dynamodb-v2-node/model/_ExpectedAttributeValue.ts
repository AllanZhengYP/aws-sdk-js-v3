import {_AttributeValue} from './_AttributeValue';
import {_AttributeValueList} from './_AttributeValueList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_ExpectedAttributeValue as _ExpectedAttributeValue_Type} from '../types/_ExpectedAttributeValue';

export const _ExpectedAttributeValue: _StructureModel_<_ExpectedAttributeValue_Type, any> = {
    parse: (data: any): _ExpectedAttributeValue_Type => {
        let rtn: any = {};
        if (data.Value) rtn.Value = _AttributeValue.parse!(data.Value);
    if (data.Exists) rtn.Exists = data.Exists;
    if (data.ComparisonOperator) rtn.ComparisonOperator = data.ComparisonOperator;
    if (data.AttributeValueList) rtn.AttributeValueList = _AttributeValueList.parse!(data.AttributeValueList);
        return rtn as _ExpectedAttributeValue_Type;
    },
    serialize: (data: _ExpectedAttributeValue_Type): any => {
        let rtn: any = {};
        if (data.Value) rtn.Value = _AttributeValue.serialize!(data.Value as any);

    if (data.Exists) rtn.Exists = data.Exists;

    if (data.ComparisonOperator) rtn.ComparisonOperator = data.ComparisonOperator;

    if (data.AttributeValueList) rtn.AttributeValueList = _AttributeValueList.serialize!(data.AttributeValueList as any);

        return rtn;
    },
};