import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {GetIdentityPoolRolesInput as GetIdentityPoolRolesInput_Type} from '../types/GetIdentityPoolRolesInput';

export const GetIdentityPoolRolesInput: _OperationInputShapeModel_<GetIdentityPoolRolesInput_Type, any> = {
    serialize: (data: GetIdentityPoolRolesInput_Type): any => {
    		if (!data.IdentityPoolId) {
        throw new Error('GetIdentityPoolRolesInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

        return rtn;
    },
};