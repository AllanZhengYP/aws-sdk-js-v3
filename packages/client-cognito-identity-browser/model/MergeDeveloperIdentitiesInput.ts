import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {MergeDeveloperIdentitiesInput as MergeDeveloperIdentitiesInput_Type} from '../types/MergeDeveloperIdentitiesInput';

export const MergeDeveloperIdentitiesInput: _OperationInputShapeModel_<MergeDeveloperIdentitiesInput_Type, any> = {
    serialize: (data: MergeDeveloperIdentitiesInput_Type): any => {
    		if (!data.SourceUserIdentifier||!data.DestinationUserIdentifier||!data.DeveloperProviderName||!data.IdentityPoolId) {
        throw new Error('MergeDeveloperIdentitiesInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.SourceUserIdentifier) rtn.SourceUserIdentifier = data.SourceUserIdentifier;

    if (data.DestinationUserIdentifier) rtn.DestinationUserIdentifier = data.DestinationUserIdentifier;

    if (data.DeveloperProviderName) rtn.DeveloperProviderName = data.DeveloperProviderName;

    if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

        return rtn;
    },
};