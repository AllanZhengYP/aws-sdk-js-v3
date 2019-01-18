import {_ConsumerDescription} from './_ConsumerDescription';
import {OperationOutputShapeModel as _OperationOutputShapeModel_} from '@aws-sdk/types';
import {DescribeStreamConsumerOutput as DescribeStreamConsumerOutput_Type} from '../types/DescribeStreamConsumerOutput';

export const DescribeStreamConsumerOutput: _OperationOutputShapeModel_<DescribeStreamConsumerOutput_Type, any> = {
    parse: (data: any): DescribeStreamConsumerOutput_Type => {
        let rtn: any = {};
        if (data.ConsumerDescription) rtn.ConsumerDescription = _ConsumerDescription.parse!(data.ConsumerDescription);
        return rtn as DescribeStreamConsumerOutput_Type;
    },
};