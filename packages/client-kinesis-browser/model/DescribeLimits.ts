import {DescribeLimitsInput} from './DescribeLimitsInput';
import {DescribeLimitsOutput} from './DescribeLimitsOutput';
import {DescribeLimitsInput as DescribeLimitsInput_Type} from '../types/DescribeLimitsInput';
import {DescribeLimitsOutput as DescribeLimitsOutput_Type} from '../types/DescribeLimitsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeLimits: _Operation_<DescribeLimitsInput_Type, DescribeLimitsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeLimits',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeLimitsInput,
    output: DescribeLimitsOutput,
    errors: [],
};