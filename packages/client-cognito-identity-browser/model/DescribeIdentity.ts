import {DescribeIdentityInput} from './DescribeIdentityInput';
import {DescribeIdentityOutput} from './DescribeIdentityOutput';
import {DescribeIdentityInput as DescribeIdentityInput_Type} from '../types/DescribeIdentityInput';
import {DescribeIdentityOutput as DescribeIdentityOutput_Type} from '../types/DescribeIdentityOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeIdentity: _Operation_<DescribeIdentityInput_Type, DescribeIdentityOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeIdentityInput,
    output: DescribeIdentityOutput,
    errors: [],
};