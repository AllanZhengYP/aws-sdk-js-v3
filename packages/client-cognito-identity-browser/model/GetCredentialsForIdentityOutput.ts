import {_Credentials} from './_Credentials';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {GetCredentialsForIdentityOutput as GetCredentialsForIdentityOutput_Type} from '../types/GetCredentialsForIdentityOutput';

export const GetCredentialsForIdentityOutput: _OperationOutputShapeModel_<GetCredentialsForIdentityOutput_Type, any> = {
    parse: (data: any): GetCredentialsForIdentityOutput_Type => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;
    if (data.Credentials) rtn.Credentials = _Credentials.parse!(data.Credentials);
        return rtn as GetCredentialsForIdentityOutput_Type;
    },
};