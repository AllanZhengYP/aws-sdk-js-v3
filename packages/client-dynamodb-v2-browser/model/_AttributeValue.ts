import {_StringSetAttributeValue} from './_StringSetAttributeValue';
import {_NumberSetAttributeValue} from './_NumberSetAttributeValue';
import {_BinarySetAttributeValue} from './_BinarySetAttributeValue';
import {_MapAttributeValue} from './_MapAttributeValue';
import {_ListAttributeValue} from './_ListAttributeValue';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_AttributeValue as _AttributeValue_Type} from '../types/_AttributeValue';

export const _AttributeValue: _StructureModel_<_AttributeValue_Type, any> = {
    parse: (data: any): _AttributeValue_Type => {
        let rtn: any = {};
        if (data.S) rtn.S = data.S;
    if (data.N) rtn.N = data.N;
    if (data.B) rtn.B = data.B;
    if (data.SS) rtn.SS = _StringSetAttributeValue.parse!(data.SS);
    if (data.NS) rtn.NS = _NumberSetAttributeValue.parse!(data.NS);
    if (data.BS) rtn.BS = _BinarySetAttributeValue.parse!(data.BS);
    if (data.M) rtn.M = _MapAttributeValue.parse!(data.M);
    if (data.L) rtn.L = _ListAttributeValue.parse!(data.L);
    if (data.NULL) rtn.NULL = data.NULL;
    if (data.BOOL) rtn.BOOL = data.BOOL;
        return rtn as _AttributeValue_Type;
    },
    serialize: (data: _AttributeValue_Type): any => {
        let rtn: any = {};
        if (data.S) rtn.S = data.S;

    if (data.N) rtn.N = data.N;

    if (data.B) rtn.B = data.B;

    if (data.SS) rtn.SS = _StringSetAttributeValue.serialize!(data.SS as any);

    if (data.NS) rtn.NS = _NumberSetAttributeValue.serialize!(data.NS as any);

    if (data.BS) rtn.BS = _BinarySetAttributeValue.serialize!(data.BS as any);

    if (data.M) rtn.M = _MapAttributeValue.serialize!(data.M as any);

    if (data.L) rtn.L = _ListAttributeValue.serialize!(data.L as any);

    if (data.NULL) rtn.NULL = data.NULL;

    if (data.BOOL) rtn.BOOL = data.BOOL;

        return rtn;
    },
};