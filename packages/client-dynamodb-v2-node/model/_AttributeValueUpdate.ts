import {_AttributeValue} from './_AttributeValue';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_AttributeValueUpdate as _AttributeValueUpdate_Type} from '../types/_AttributeValueUpdate';

export const _AttributeValueUpdate: _StructureModel_<_AttributeValueUpdate_Type, any> = {
    parse: (data: any): _AttributeValueUpdate_Type => {
        let rtn: any = {};
        if (data.Value) rtn.Value = _AttributeValue.parse!(data.Value);
    if (data.Action) rtn.Action = data.Action;
        return rtn as _AttributeValueUpdate_Type;
    },
    serialize: (data: _AttributeValueUpdate_Type): any => {
        let rtn: any = {};
        if (data.Value) rtn.Value = _AttributeValue.serialize!(data.Value as any);

    if (data.Action) rtn.Action = data.Action;

        return rtn;
    },
};