import {_RolesMap} from './_RolesMap';
import {_RoleMappingMap} from './_RoleMappingMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {SetIdentityPoolRolesInput as SetIdentityPoolRolesInput_Type} from '../types/SetIdentityPoolRolesInput';

export const SetIdentityPoolRolesInput: _OperationInputShapeModel_<SetIdentityPoolRolesInput_Type, any> = {
    serialize: (data: SetIdentityPoolRolesInput_Type): any => {
    		if (!data.IdentityPoolId||!data.Roles) {
        throw new Error('SetIdentityPoolRolesInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

    if (data.Roles) rtn.Roles = _RolesMap.serialize!(data.Roles as any);

    if (data.RoleMappings) rtn.RoleMappings = _RoleMappingMap.serialize!(data.RoleMappings as any);

        return rtn;
    },
};