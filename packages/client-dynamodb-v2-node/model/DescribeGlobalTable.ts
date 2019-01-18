import {DescribeGlobalTableInput} from './DescribeGlobalTableInput';
import {DescribeGlobalTableOutput} from './DescribeGlobalTableOutput';
import {DescribeGlobalTableInput as DescribeGlobalTableInput_Type} from '../types/DescribeGlobalTableInput';
import {DescribeGlobalTableOutput as DescribeGlobalTableOutput_Type} from '../types/DescribeGlobalTableOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeGlobalTable: _Operation_<DescribeGlobalTableInput_Type, DescribeGlobalTableOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeGlobalTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeGlobalTableInput,
    output: DescribeGlobalTableOutput,
    errors: [],
};