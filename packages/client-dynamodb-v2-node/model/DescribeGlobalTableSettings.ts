import {DescribeGlobalTableSettingsInput} from './DescribeGlobalTableSettingsInput';
import {DescribeGlobalTableSettingsOutput} from './DescribeGlobalTableSettingsOutput';
import {DescribeGlobalTableSettingsInput as DescribeGlobalTableSettingsInput_Type} from '../types/DescribeGlobalTableSettingsInput';
import {DescribeGlobalTableSettingsOutput as DescribeGlobalTableSettingsOutput_Type} from '../types/DescribeGlobalTableSettingsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DescribeGlobalTableSettings: _Operation_<DescribeGlobalTableSettingsInput_Type, DescribeGlobalTableSettingsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DescribeGlobalTableSettings',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DescribeGlobalTableSettingsInput,
    output: DescribeGlobalTableSettingsOutput,
    errors: [],
};