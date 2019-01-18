import {_StreamDescriptionSummary} from './_StreamDescriptionSummary';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeStreamSummaryOutput as DescribeStreamSummaryOutput_Type} from '../types/DescribeStreamSummaryOutput';

export const DescribeStreamSummaryOutput: _OperationOutputShapeModel_<DescribeStreamSummaryOutput_Type, any> = {
    parse: (data: any): DescribeStreamSummaryOutput_Type => {
        let rtn: any = {};
        if (data.StreamDescriptionSummary) rtn.StreamDescriptionSummary = _StreamDescriptionSummary.parse!(data.StreamDescriptionSummary);
        return rtn as DescribeStreamSummaryOutput_Type;
    },
};