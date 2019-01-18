import {DescribeTableInput} from './DescribeTableInput';
import {DescribeTableOutput} from './DescribeTableOutput';
import {DescribeTableInput as DescribeTableInput_Type} from '../types/DescribeTableInput';
import {DescribeTableOutput as DescribeTableOutput_Type} from '../types/DescribeTableOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeTable: _Operation_<DescribeTableInput_Type, DescribeTableOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeTableInput,
    output: DescribeTableOutput,
    errors: [],
};