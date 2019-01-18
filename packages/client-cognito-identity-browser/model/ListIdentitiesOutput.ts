import {_IdentitiesList} from './_IdentitiesList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ListIdentitiesOutput as ListIdentitiesOutput_Type} from '../types/ListIdentitiesOutput';

export const ListIdentitiesOutput: _OperationOutputShapeModel_<ListIdentitiesOutput_Type, any> = {
    parse: (data: any): ListIdentitiesOutput_Type => {
        let rtn: any = {};
        if (data.IdentityPoolId) rtn.IdentityPoolId = data.IdentityPoolId;
    if (data.Identities) rtn.Identities = _IdentitiesList.parse!(data.Identities);
    if (data.NextToken) rtn.NextToken = data.NextToken;
        return rtn as ListIdentitiesOutput_Type;
    },
};