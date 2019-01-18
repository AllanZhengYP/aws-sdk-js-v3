import {DescribeTimeToLiveInput} from './DescribeTimeToLiveInput';
import {DescribeTimeToLiveOutput} from './DescribeTimeToLiveOutput';
import {DescribeTimeToLiveInput as DescribeTimeToLiveInput_Type} from '../types/DescribeTimeToLiveInput';
import {DescribeTimeToLiveOutput as DescribeTimeToLiveOutput_Type} from '../types/DescribeTimeToLiveOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeTimeToLive: _Operation_<DescribeTimeToLiveInput_Type, DescribeTimeToLiveOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeTimeToLive',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeTimeToLiveInput,
    output: DescribeTimeToLiveOutput,
    errors: [],
};