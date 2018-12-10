import {DescribeEndpointsInput} from './DescribeEndpointsInput';
import {DescribeEndpointsOutput} from './DescribeEndpointsOutput';
import {OperationModel as _Operation_} from '@aws-js-sdk-v3-prerelease/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeEndpoints: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DescribeEndpoints',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DescribeEndpointsInput,
    },
    output: {
        shape: DescribeEndpointsOutput,
    },
    errors: [],
};