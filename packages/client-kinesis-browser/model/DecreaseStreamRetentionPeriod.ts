import {DecreaseStreamRetentionPeriodInput} from './DecreaseStreamRetentionPeriodInput';
import {DecreaseStreamRetentionPeriodOutput} from './DecreaseStreamRetentionPeriodOutput';
import {DecreaseStreamRetentionPeriodInput as DecreaseStreamRetentionPeriodInput_Type} from '../types/DecreaseStreamRetentionPeriodInput';
import {DecreaseStreamRetentionPeriodOutput as DecreaseStreamRetentionPeriodOutput_Type} from '../types/DecreaseStreamRetentionPeriodOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DecreaseStreamRetentionPeriod: _Operation_<DecreaseStreamRetentionPeriodInput_Type, DecreaseStreamRetentionPeriodOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DecreaseStreamRetentionPeriod',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DecreaseStreamRetentionPeriodInput,
    output: DecreaseStreamRetentionPeriodOutput,
    errors: [],
};