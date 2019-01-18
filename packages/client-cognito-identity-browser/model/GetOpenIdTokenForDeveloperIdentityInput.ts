import {_LoginsMap} from './_LoginsMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {GetOpenIdTokenForDeveloperIdentityInput as GetOpenIdTokenForDeveloperIdentityInput_Type} from '../types/GetOpenIdTokenForDeveloperIdentityInput';

export const GetOpenIdTokenForDeveloperIdentityInput: _OperationInputShapeModel_<GetOpenIdTokenForDeveloperIdentityInput_Type, any> = {
    serialize: (data: GetOpenIdTokenForDeveloperIdentityInput_Type): any => {
    		if (!data.IdentityPoolId||!data.Logins) {
        throw new Error('GetOpenIdTokenForDeveloperIdentityInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

    if (data.IdentityId) rtn.IdentityId = data.IdentityId;

    if (data.Logins) rtn.Logins = _LoginsMap.serialize!(data.Logins as any);

    if (data.TokenDuration) rtn.TokenDuration = data.TokenDuration;

        return rtn;
    },
};