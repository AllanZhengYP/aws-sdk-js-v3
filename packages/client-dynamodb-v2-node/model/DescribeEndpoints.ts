import {DescribeEndpointsInput} from './DescribeEndpointsInput';
import {DescribeEndpointsOutput} from './DescribeEndpointsOutput';
import {DescribeEndpointsInput as DescribeEndpointsInput_Type} from '../types/DescribeEndpointsInput';
import {DescribeEndpointsOutput as DescribeEndpointsOutput_Type} from '../types/DescribeEndpointsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeEndpoints: _Operation_<DescribeEndpointsInput_Type, DescribeEndpointsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeEndpoints',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeEndpointsInput,
    output: DescribeEndpointsOutput,
    errors: [],
};