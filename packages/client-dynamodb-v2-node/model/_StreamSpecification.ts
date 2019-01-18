import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_StreamSpecification as _StreamSpecification_Type} from '../types/_StreamSpecification';

export const _StreamSpecification: _StructureModel_<_StreamSpecification_Type, any> = {
    parse: (data: any): _StreamSpecification_Type => {
        let rtn: any = {};
        if (data.StreamEnabled) rtn.StreamEnabled = data.StreamEnabled;
    if (data.StreamViewType) rtn.StreamViewType = data.StreamViewType;
        return rtn as _StreamSpecification_Type;
    },
    serialize: (data: _StreamSpecification_Type): any => {
        let rtn: any = {};
        if (data.StreamEnabled) rtn.StreamEnabled = data.StreamEnabled;

    if (data.StreamViewType) rtn.StreamViewType = data.StreamViewType;

        return rtn;
    },
};