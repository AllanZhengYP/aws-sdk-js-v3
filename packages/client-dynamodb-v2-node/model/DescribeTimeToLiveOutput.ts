import {_TimeToLiveDescription} from './_TimeToLiveDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeTimeToLiveOutput as DescribeTimeToLiveOutput_Type} from '../types/DescribeTimeToLiveOutput';

export const DescribeTimeToLiveOutput: _OperationOutputShapeModel_<DescribeTimeToLiveOutput_Type, any> = {
    parse: (data: any): DescribeTimeToLiveOutput_Type => {
        let rtn: any = {};
        if (data.TimeToLiveDescription) rtn.TimeToLiveDescription = _TimeToLiveDescription.parse!(data.TimeToLiveDescription);
        return rtn as DescribeTimeToLiveOutput_Type;
    },
};