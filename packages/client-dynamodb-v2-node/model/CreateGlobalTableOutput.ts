import {_GlobalTableDescription} from './_GlobalTableDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {CreateGlobalTableOutput as CreateGlobalTableOutput_Type} from '../types/CreateGlobalTableOutput';

export const CreateGlobalTableOutput: _OperationOutputShapeModel_<CreateGlobalTableOutput_Type, any> = {
    parse: (data: any): CreateGlobalTableOutput_Type => {
        let rtn: any = {};
        if (data.GlobalTableDescription) rtn.GlobalTableDescription = _GlobalTableDescription.parse!(data.GlobalTableDescription);
        return rtn as CreateGlobalTableOutput_Type;
    },
};