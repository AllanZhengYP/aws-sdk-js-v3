import {_PointInTimeRecoverySpecification} from './_PointInTimeRecoverySpecification';
import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {UpdateContinuousBackupsInput as UpdateContinuousBackupsInput_Type} from '../types/UpdateContinuousBackupsInput';

export const UpdateContinuousBackupsInput: _OperationInputShapeModel_<UpdateContinuousBackupsInput_Type, any> = {
    serialize: (data: UpdateContinuousBackupsInput_Type): any => {
    		if (!data.TableName||!data.PointInTimeRecoverySpecification) {
        throw new Error('UpdateContinuousBackupsInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.TableName) rtn.TableName = data.TableName;

    if (data.PointInTimeRecoverySpecification) rtn.PointInTimeRecoverySpecification = _PointInTimeRecoverySpecification.serialize!(data.PointInTimeRecoverySpecification as any);

        return rtn;
    },
};