import {DescribeStreamConsumerInput} from './DescribeStreamConsumerInput';
import {DescribeStreamConsumerOutput} from './DescribeStreamConsumerOutput';
import {DescribeStreamConsumerInput as DescribeStreamConsumerInput_Type} from '../types/DescribeStreamConsumerInput';
import {DescribeStreamConsumerOutput as DescribeStreamConsumerOutput_Type} from '../types/DescribeStreamConsumerOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeStreamConsumer: _Operation_<DescribeStreamConsumerInput_Type, DescribeStreamConsumerOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeStreamConsumer',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeStreamConsumerInput,
    output: DescribeStreamConsumerOutput,
    errors: [],
};