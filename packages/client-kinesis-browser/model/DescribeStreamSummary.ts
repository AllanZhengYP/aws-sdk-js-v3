import {DescribeStreamSummaryInput} from './DescribeStreamSummaryInput';
import {DescribeStreamSummaryOutput} from './DescribeStreamSummaryOutput';
import {DescribeStreamSummaryInput as DescribeStreamSummaryInput_Type} from '../types/DescribeStreamSummaryInput';
import {DescribeStreamSummaryOutput as DescribeStreamSummaryOutput_Type} from '../types/DescribeStreamSummaryOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeStreamSummary: _Operation_<DescribeStreamSummaryInput_Type, DescribeStreamSummaryOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeStreamSummary',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeStreamSummaryInput,
    output: DescribeStreamSummaryOutput,
    errors: [],
};