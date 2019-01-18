import {DescribeStreamInput} from './DescribeStreamInput';
import {DescribeStreamOutput} from './DescribeStreamOutput';
import {DescribeStreamInput as DescribeStreamInput_Type} from '../types/DescribeStreamInput';
import {DescribeStreamOutput as DescribeStreamOutput_Type} from '../types/DescribeStreamOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeStream: _Operation_<DescribeStreamInput_Type, DescribeStreamOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeStream',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeStreamInput,
    output: DescribeStreamOutput,
    errors: [],
};