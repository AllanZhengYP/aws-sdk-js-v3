import {_ContinuousBackupsDescription} from './_ContinuousBackupsDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {UpdateContinuousBackupsOutput as UpdateContinuousBackupsOutput_Type} from '../types/UpdateContinuousBackupsOutput';

export const UpdateContinuousBackupsOutput: _OperationOutputShapeModel_<UpdateContinuousBackupsOutput_Type, any> = {
    parse: (data: any): UpdateContinuousBackupsOutput_Type => {
        let rtn: any = {};
        if (data.ContinuousBackupsDescription) rtn.ContinuousBackupsDescription = _ContinuousBackupsDescription.parse!(data.ContinuousBackupsDescription);
        return rtn as UpdateContinuousBackupsOutput_Type;
    },
};