import {_TableDescription} from './_TableDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {UpdateTableOutput as UpdateTableOutput_Type} from '../types/UpdateTableOutput';

export const UpdateTableOutput: _OperationOutputShapeModel_<UpdateTableOutput_Type, any> = {
    parse: (data: any): UpdateTableOutput_Type => {
        let rtn: any = {};
        if (data.TableDescription) rtn.TableDescription = _TableDescription.parse!(data.TableDescription);
        return rtn as UpdateTableOutput_Type;
    },
};