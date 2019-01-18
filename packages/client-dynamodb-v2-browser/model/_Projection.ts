import {_NonKeyAttributeNameList} from './_NonKeyAttributeNameList';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_Projection as _Projection_Type} from '../types/_Projection';

export const _Projection: _StructureModel_<_Projection_Type, any> = {
    parse: (data: any): _Projection_Type => {
        let rtn: any = {};
        if (data.ProjectionType) rtn.ProjectionType = data.ProjectionType;
    if (data.NonKeyAttributes) rtn.NonKeyAttributes = _NonKeyAttributeNameList.parse!(data.NonKeyAttributes);
        return rtn as _Projection_Type;
    },
    serialize: (data: _Projection_Type): any => {
        let rtn: any = {};
        if (data.ProjectionType) rtn.ProjectionType = data.ProjectionType;

    if (data.NonKeyAttributes) rtn.NonKeyAttributes = _NonKeyAttributeNameList.serialize!(data.NonKeyAttributes as any);

        return rtn;
    },
};