import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {ListIdentityPoolsInput as ListIdentityPoolsInput_Type} from '../types/ListIdentityPoolsInput';

export const ListIdentityPoolsInput: _OperationInputShapeModel_<ListIdentityPoolsInput_Type, any> = {
    serialize: (data: ListIdentityPoolsInput_Type): any => {
    		if (!data.MaxResults) {
        throw new Error('ListIdentityPoolsInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.MaxResults) rtn.MaxResults = data.MaxResults;

    if (data.NextToken) rtn.NextToken = data.NextToken;

        return rtn;
    },
};