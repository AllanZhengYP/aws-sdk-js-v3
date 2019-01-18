import {_LoginsMap} from './_LoginsMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {GetOpenIdTokenInput as GetOpenIdTokenInput_Type} from '../types/GetOpenIdTokenInput';

export const GetOpenIdTokenInput: _OperationInputShapeModel_<GetOpenIdTokenInput_Type, any> = {
    serialize: (data: GetOpenIdTokenInput_Type): any => {
    		if (!data.IdentityId) {
        throw new Error('GetOpenIdTokenInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;

    if (data.Logins) rtn.Logins = _LoginsMap.serialize!(data.Logins as any);

        return rtn;
    },
};