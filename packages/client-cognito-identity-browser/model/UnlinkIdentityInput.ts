import {_LoginsMap} from './_LoginsMap';
import {_LoginsList} from './_LoginsList';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {UnlinkIdentityInput as UnlinkIdentityInput_Type} from '../types/UnlinkIdentityInput';

export const UnlinkIdentityInput: _OperationInputShapeModel_<UnlinkIdentityInput_Type, any> = {
    serialize: (data: UnlinkIdentityInput_Type): any => {
    		if (!data.IdentityId||!data.Logins||!data.LoginsToRemove) {
        throw new Error('UnlinkIdentityInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;

    if (data.Logins) rtn.Logins = _LoginsMap.serialize!(data.Logins as any);

    if (data.LoginsToRemove) rtn.LoginsToRemove = _LoginsList.serialize!(data.LoginsToRemove as any);

        return rtn;
    },
};