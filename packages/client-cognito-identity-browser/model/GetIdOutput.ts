import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {GetIdOutput as GetIdOutput_Type} from '../types/GetIdOutput';

export const GetIdOutput: _OperationOutputShapeModel_<GetIdOutput_Type, any> = {
    parse: (data: any): GetIdOutput_Type => {
        let rtn: any = {};
        if (data.IdentityId) rtn.IdentityId = data.IdentityId;
        return rtn as GetIdOutput_Type;
    },
};