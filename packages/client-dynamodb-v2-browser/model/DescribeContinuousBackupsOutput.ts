import {_ContinuousBackupsDescription} from './_ContinuousBackupsDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeContinuousBackupsOutput as DescribeContinuousBackupsOutput_Type} from '../types/DescribeContinuousBackupsOutput';

export const DescribeContinuousBackupsOutput: _OperationOutputShapeModel_<DescribeContinuousBackupsOutput_Type, any> = {
    parse: (data: any): DescribeContinuousBackupsOutput_Type => {
        let rtn: any = {};
        if (data.ContinuousBackupsDescription) rtn.ContinuousBackupsDescription = _ContinuousBackupsDescription.parse!(data.ContinuousBackupsDescription);
        return rtn as DescribeContinuousBackupsOutput_Type;
    },
};