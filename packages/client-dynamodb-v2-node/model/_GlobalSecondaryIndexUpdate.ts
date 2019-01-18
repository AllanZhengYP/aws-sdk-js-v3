import {_UpdateGlobalSecondaryIndexAction} from './_UpdateGlobalSecondaryIndexAction';
import {_CreateGlobalSecondaryIndexAction} from './_CreateGlobalSecondaryIndexAction';
import {_DeleteGlobalSecondaryIndexAction} from './_DeleteGlobalSecondaryIndexAction';
import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_GlobalSecondaryIndexUpdate as _GlobalSecondaryIndexUpdate_Type} from '../types/_GlobalSecondaryIndexUpdate';

export const _GlobalSecondaryIndexUpdate: _StructureModel_<_GlobalSecondaryIndexUpdate_Type, any> = {
    parse: (data: any): _GlobalSecondaryIndexUpdate_Type => {
        let rtn: any = {};
        if (data.Update) rtn.Update = _UpdateGlobalSecondaryIndexAction.parse!(data.Update);
    if (data.Create) rtn.Create = _CreateGlobalSecondaryIndexAction.parse!(data.Create);
    if (data.Delete) rtn.Delete = _DeleteGlobalSecondaryIndexAction.parse!(data.Delete);
        return rtn as _GlobalSecondaryIndexUpdate_Type;
    },
    serialize: (data: _GlobalSecondaryIndexUpdate_Type): any => {
        let rtn: any = {};
        if (data.Update) rtn.Update = _UpdateGlobalSecondaryIndexAction.serialize!(data.Update as any);

    if (data.Create) rtn.Create = _CreateGlobalSecondaryIndexAction.serialize!(data.Create as any);

    if (data.Delete) rtn.Delete = _DeleteGlobalSecondaryIndexAction.serialize!(data.Delete as any);

        return rtn;
    },
};