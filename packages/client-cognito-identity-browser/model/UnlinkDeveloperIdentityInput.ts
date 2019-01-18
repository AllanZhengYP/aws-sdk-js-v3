import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {UnlinkDeveloperIdentityInput as UnlinkDeveloperIdentityInput_Type} from '../types/UnlinkDeveloperIdentityInput';

export const UnlinkDeveloperIdentityInput: _OperationInputShapeModel_<UnlinkDeveloperIdentityInput_Type, any> = {
    serialize: (data: UnlinkDeveloperIdentityInput_Type): any => {
    		if (!data.IdentityId||!data.IdentityPoolId||!data.DeveloperProviderName||!data.DeveloperUserIdentifier) {
        throw new Error('UnlinkDeveloperIdentityInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;

    if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

    if (data.DeveloperProviderName) rtn.DeveloperProviderName = data.DeveloperProviderName;

    if (data.DeveloperUserIdentifier) rtn.DeveloperUserIdentifier = data.DeveloperUserIdentifier;

        return rtn;
    },
};