import {_RolesMap} from './_RolesMap';
import {_RoleMappingMap} from './_RoleMappingMap';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {GetIdentityPoolRolesOutput as GetIdentityPoolRolesOutput_Type} from '../types/GetIdentityPoolRolesOutput';

export const GetIdentityPoolRolesOutput: _OperationOutputShapeModel_<GetIdentityPoolRolesOutput_Type, any> = {
    parse: (data: any): GetIdentityPoolRolesOutput_Type => {
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;
    if (data.Roles) rtn.Roles = _RolesMap.parse!(data.Roles);
    if (data.RoleMappings) rtn.RoleMappings = _RoleMappingMap.parse!(data.RoleMappings);
        return rtn as GetIdentityPoolRolesOutput_Type;
    },
};