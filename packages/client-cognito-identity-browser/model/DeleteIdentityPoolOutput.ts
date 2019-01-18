import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DeleteIdentityPoolOutput as DeleteIdentityPoolOutput_Type} from '../types/DeleteIdentityPoolOutput';

export const DeleteIdentityPoolOutput: _OperationOutputShapeModel_<DeleteIdentityPoolOutput_Type, any> = {
    parse: (data: any): DeleteIdentityPoolOutput_Type => {
        let rtn: any = {};

        return rtn as DeleteIdentityPoolOutput_Type;
    },
};