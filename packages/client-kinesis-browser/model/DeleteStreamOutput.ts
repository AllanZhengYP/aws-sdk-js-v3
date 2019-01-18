import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DeleteStreamOutput as DeleteStreamOutput_Type} from '../types/DeleteStreamOutput';

export const DeleteStreamOutput: _OperationOutputShapeModel_<DeleteStreamOutput_Type, any> = {
    parse: (data: any): DeleteStreamOutput_Type => {
        let rtn: any = {};

        return rtn as DeleteStreamOutput_Type;
    },
};