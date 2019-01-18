import {StructureModel as _StructureModel_} from '@aws-sdk/types';
import {_IdentityPoolShortDescription as _IdentityPoolShortDescription_Type} from '../types/_IdentityPoolShortDescription';

export const _IdentityPoolShortDescription: _StructureModel_<_IdentityPoolShortDescription_Type, any> = {
    parse: (data: any): _IdentityPoolShortDescription_Type => {
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;
    if (data.IdentityPoolName) rtn.IdentityPoolName = data.IdentityPoolName;
        return rtn as _IdentityPoolShortDescription_Type;
    },
    serialize: (data: _IdentityPoolShortDescription_Type): any => {
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

    if (data.IdentityPoolName) rtn.IdentityPoolName = data.IdentityPoolName;

        return rtn;
    },
};