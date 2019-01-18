import {_GlobalTableDescription} from './_GlobalTableDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {UpdateGlobalTableOutput as UpdateGlobalTableOutput_Type} from '../types/UpdateGlobalTableOutput';

export const UpdateGlobalTableOutput: _OperationOutputShapeModel_<UpdateGlobalTableOutput_Type, any> = {
    parse: (data: any): UpdateGlobalTableOutput_Type => {
        let rtn: any = {};
        if (data.GlobalTableDescription) rtn.GlobalTableDescription = _GlobalTableDescription.parse!(data.GlobalTableDescription);
        return rtn as UpdateGlobalTableOutput_Type;
    },
};