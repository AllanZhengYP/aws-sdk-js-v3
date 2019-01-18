import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {GetOpenIdTokenForDeveloperIdentityOutput as GetOpenIdTokenForDeveloperIdentityOutput_Type} from '../types/GetOpenIdTokenForDeveloperIdentityOutput';

export const GetOpenIdTokenForDeveloperIdentityOutput: _OperationOutputShapeModel_<GetOpenIdTokenForDeveloperIdentityOutput_Type, any> = {
    parse: (data: any): GetOpenIdTokenForDeveloperIdentityOutput_Type => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;
    if (data.Token) rtn.Token = data.Token;
        return rtn as GetOpenIdTokenForDeveloperIdentityOutput_Type;
    },
};