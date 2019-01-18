import {_StreamDescription} from './_StreamDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeStreamOutput as DescribeStreamOutput_Type} from '../types/DescribeStreamOutput';

export const DescribeStreamOutput: _OperationOutputShapeModel_<DescribeStreamOutput_Type, any> = {
    parse: (data: any): DescribeStreamOutput_Type => {
        let rtn: any = {};
        if (data.StreamDescription) rtn.StreamDescription = _StreamDescription.parse!(data.StreamDescription);
        return rtn as DescribeStreamOutput_Type;
    },
};