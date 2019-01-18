import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_TimeToLiveDescription as _TimeToLiveDescription_Type} from '../types/_TimeToLiveDescription';

export const _TimeToLiveDescription: _StructureModel_<_TimeToLiveDescription_Type, any> = {
    parse: (data: any): _TimeToLiveDescription_Type => {
        let rtn: any = {};
        if (data.TimeToLiveStatus) rtn.TimeToLiveStatus = data.TimeToLiveStatus;
    if (data.AttributeName) rtn.AttributeName = data.AttributeName;
        return rtn as _TimeToLiveDescription_Type;
    },
    serialize: (data: _TimeToLiveDescription_Type): any => {
        let rtn: any = {};
        if (data.TimeToLiveStatus) rtn.TimeToLiveStatus = data.TimeToLiveStatus;

    if (data.AttributeName) rtn.AttributeName = data.AttributeName;

        return rtn;
    },
};