import {_TimeToLiveSpecification} from './_TimeToLiveSpecification';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {UpdateTimeToLiveOutput as UpdateTimeToLiveOutput_Type} from '../types/UpdateTimeToLiveOutput';

export const UpdateTimeToLiveOutput: _OperationOutputShapeModel_<UpdateTimeToLiveOutput_Type, any> = {
    parse: (data: any): UpdateTimeToLiveOutput_Type => {
        let rtn: any = {};
        if (data.TimeToLiveSpecification) rtn.TimeToLiveSpecification = _TimeToLiveSpecification.parse!(data.TimeToLiveSpecification);
        return rtn as UpdateTimeToLiveOutput_Type;
    },
};