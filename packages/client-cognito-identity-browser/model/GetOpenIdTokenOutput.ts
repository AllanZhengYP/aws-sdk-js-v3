import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {GetOpenIdTokenOutput as GetOpenIdTokenOutput_Type} from '../types/GetOpenIdTokenOutput';

export const GetOpenIdTokenOutput: _OperationOutputShapeModel_<GetOpenIdTokenOutput_Type, any> = {
    parse: (data: any): GetOpenIdTokenOutput_Type => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;
    if (data.Token) rtn.Token = data.Token;
        return rtn as GetOpenIdTokenOutput_Type;
    },
};