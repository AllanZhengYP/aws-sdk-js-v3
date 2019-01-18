import {_TableDescription} from './_TableDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DeleteTableOutput as DeleteTableOutput_Type} from '../types/DeleteTableOutput';

export const DeleteTableOutput: _OperationOutputShapeModel_<DeleteTableOutput_Type, any> = {
    parse: (data: any): DeleteTableOutput_Type => {
        let rtn: any = {};
        if (data.TableDescription) rtn.TableDescription = _TableDescription.parse!(data.TableDescription);
        return rtn as DeleteTableOutput_Type;
    },
};