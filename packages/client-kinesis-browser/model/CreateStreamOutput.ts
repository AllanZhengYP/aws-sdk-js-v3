import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {CreateStreamOutput as CreateStreamOutput_Type} from '../types/CreateStreamOutput';

export const CreateStreamOutput: _OperationOutputShapeModel_<CreateStreamOutput_Type, any> = {
    parse: (data: any): CreateStreamOutput_Type => {
        let rtn: any = {};

        return rtn as CreateStreamOutput_Type;
    },
};