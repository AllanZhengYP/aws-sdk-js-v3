import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {LookupDeveloperIdentityInput as LookupDeveloperIdentityInput_Type} from '../types/LookupDeveloperIdentityInput';

export const LookupDeveloperIdentityInput: _OperationInputShapeModel_<LookupDeveloperIdentityInput_Type, any> = {
    serialize: (data: LookupDeveloperIdentityInput_Type): any => {
    		if (!data.IdentityPoolId) {
        throw new Error('LookupDeveloperIdentityInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

    if (data.IdentityId) rtn.IdentityId = data.IdentityId;

    if (data.DeveloperUserIdentifier) rtn.DeveloperUserIdentifier = data.DeveloperUserIdentifier;

    if (data.MaxResults) rtn.MaxResults = data.MaxResults;

    if (data.NextToken) rtn.NextToken = data.NextToken;

        return rtn;
    },
};