import {_LoginsMap} from './_LoginsMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {GetCredentialsForIdentityInput as GetCredentialsForIdentityInput_Type} from '../types/GetCredentialsForIdentityInput';

export const GetCredentialsForIdentityInput: _OperationInputShapeModel_<GetCredentialsForIdentityInput_Type, any> = {
    serialize: (data: GetCredentialsForIdentityInput_Type): any => {
    		if (!data.IdentityId) {
        throw new Error('GetCredentialsForIdentityInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;

    if (data.Logins) rtn.Logins = _LoginsMap.serialize!(data.Logins as any);

    if (data.CustomRoleArn) rtn.CustomRoleArn = data.CustomRoleArn;

        return rtn;
    },
};