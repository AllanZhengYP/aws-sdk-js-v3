import {IncreaseStreamRetentionPeriodInput} from './IncreaseStreamRetentionPeriodInput';
import {IncreaseStreamRetentionPeriodOutput} from './IncreaseStreamRetentionPeriodOutput';
import {IncreaseStreamRetentionPeriodInput as IncreaseStreamRetentionPeriodInput_Type} from '../types/IncreaseStreamRetentionPeriodInput';
import {IncreaseStreamRetentionPeriodOutput as IncreaseStreamRetentionPeriodOutput_Type} from '../types/IncreaseStreamRetentionPeriodOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const IncreaseStreamRetentionPeriod: _Operation_<IncreaseStreamRetentionPeriodInput_Type, IncreaseStreamRetentionPeriodOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'IncreaseStreamRetentionPeriod',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: IncreaseStreamRetentionPeriodInput,
    output: IncreaseStreamRetentionPeriodOutput,
    errors: [],
};