import {_LoginsMap} from './_LoginsMap';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {GetIdInput as GetIdInput_Type} from '../types/GetIdInput';

export const GetIdInput: _OperationInputShapeModel_<GetIdInput_Type, any> = {
    serialize: (data: GetIdInput_Type): any => {
    		if (!data.IdentityPoolId) {
        throw new Error('GetIdInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.AccountId) rtn.AccountId = data.AccountId;

    if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

    if (data.Logins) rtn.Logins = _LoginsMap.serialize!(data.Logins as any);

        return rtn;
    },
};