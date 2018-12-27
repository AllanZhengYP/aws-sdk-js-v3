import {DescribeStreamConsumerInput} from './DescribeStreamConsumerInput';
import {DescribeStreamConsumerOutput} from './DescribeStreamConsumerOutput';
import {LimitExceededException} from './LimitExceededException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidArgumentException} from './InvalidArgumentException';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeStreamConsumer: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeStreamConsumer',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeStreamConsumerInput,
    },
    output: {
        shape: DescribeStreamConsumerOutput,
    },
    errors: [
        {
            shape: LimitExceededException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InvalidArgumentException,
        },
    ],
};