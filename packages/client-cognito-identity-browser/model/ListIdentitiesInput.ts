import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListIdentitiesInput as ListIdentitiesInput_Type} from '../types/ListIdentitiesInput';

export const ListIdentitiesInput: _OperationInputShapeModel_<ListIdentitiesInput_Type, any> = {
    serialize: (data: ListIdentitiesInput_Type): any => {
    		if (!data.IdentityPoolId||!data.MaxResults) {
        throw new Error('ListIdentitiesInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;

    if (data.MaxResults) rtn.MaxResults = data.MaxResults;

    if (data.NextToken) rtn.NextToken = data.NextToken;

    if (data.HideDisabled) rtn.HideDisabled = data.HideDisabled;

        return rtn;
    },
};