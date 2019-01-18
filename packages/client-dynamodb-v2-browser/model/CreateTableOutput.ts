import {_TableDescription} from './_TableDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {CreateTableOutput as CreateTableOutput_Type} from '../types/CreateTableOutput';

export const CreateTableOutput: _OperationOutputShapeModel_<CreateTableOutput_Type, any> = {
    parse: (data: any): CreateTableOutput_Type => {
        let rtn: any = {};
        if (data.TableDescription) rtn.TableDescription = _TableDescription.parse!(data.TableDescription);
        return rtn as CreateTableOutput_Type;
    },
};