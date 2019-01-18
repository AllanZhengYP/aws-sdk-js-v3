import {EnableEnhancedMonitoringInput} from './EnableEnhancedMonitoringInput';
import {EnableEnhancedMonitoringOutput} from './EnableEnhancedMonitoringOutput';
import {EnableEnhancedMonitoringInput as EnableEnhancedMonitoringInput_Type} from '../types/EnableEnhancedMonitoringInput';
import {EnableEnhancedMonitoringOutput as EnableEnhancedMonitoringOutput_Type} from '../types/EnableEnhancedMonitoringOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const EnableEnhancedMonitoring: _Operation_<EnableEnhancedMonitoringInput_Type, EnableEnhancedMonitoringOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'EnableEnhancedMonitoring',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: EnableEnhancedMonitoringInput,
    output: EnableEnhancedMonitoringOutput,
    errors: [],
};