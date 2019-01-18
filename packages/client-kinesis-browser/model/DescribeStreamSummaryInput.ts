import {OperationInputShapeModel as _OperationInputShapeModel_} from '@aws-sdk/types';
import {DescribeStreamSummaryInput as DescribeStreamSummaryInput_Type} from '../types/DescribeStreamSummaryInput';

export const DescribeStreamSummaryInput: _OperationInputShapeModel_<DescribeStreamSummaryInput_Type, any> = {
    serialize: (data: DescribeStreamSummaryInput_Type): any => {
    		if (!data.StreamName) {
        throw new Error('DescribeStreamSummaryInput has missing required parameter');
    }
        let rtn: any = {};
        if (data.StreamName) rtn.StreamName = data.StreamName;

        return rtn;
    },
};