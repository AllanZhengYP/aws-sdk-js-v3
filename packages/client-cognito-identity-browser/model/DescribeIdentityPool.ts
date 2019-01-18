import {DescribeIdentityPoolInput} from './DescribeIdentityPoolInput';
import {DescribeIdentityPoolOutput} from './DescribeIdentityPoolOutput';
import {DescribeIdentityPoolInput as DescribeIdentityPoolInput_Type} from '../types/DescribeIdentityPoolInput';
import {DescribeIdentityPoolOutput as DescribeIdentityPoolOutput_Type} from '../types/DescribeIdentityPoolOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeIdentityPool: _Operation_<DescribeIdentityPoolInput_Type, DescribeIdentityPoolOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeIdentityPoolInput,
    output: DescribeIdentityPoolOutput,
    errors: [],
};