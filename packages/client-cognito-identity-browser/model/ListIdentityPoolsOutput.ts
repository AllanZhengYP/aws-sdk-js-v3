import {_IdentityPoolsList} from './_IdentityPoolsList';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {ListIdentityPoolsOutput as ListIdentityPoolsOutput_Type} from '../types/ListIdentityPoolsOutput';

export const ListIdentityPoolsOutput: _OperationOutputShapeModel_<ListIdentityPoolsOutput_Type, any> = {
    parse: (data: any): ListIdentityPoolsOutput_Type => {
        let rtn: any = {};
        if (data.IdentityPools) rtn.IdentityPools = _IdentityPoolsList.parse!(data.IdentityPools);
    if (data.NextToken) rtn.NextToken = data.NextToken;
        return rtn as ListIdentityPoolsOutput_Type;
    },
};