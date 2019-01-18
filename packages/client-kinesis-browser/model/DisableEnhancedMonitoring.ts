import {DisableEnhancedMonitoringInput} from './DisableEnhancedMonitoringInput';
import {DisableEnhancedMonitoringOutput} from './DisableEnhancedMonitoringOutput';
import {DisableEnhancedMonitoringInput as DisableEnhancedMonitoringInput_Type} from '../types/DisableEnhancedMonitoringInput';
import {DisableEnhancedMonitoringOutput as DisableEnhancedMonitoringOutput_Type} from '../types/DisableEnhancedMonitoringOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DisableEnhancedMonitoring: _Operation_<DisableEnhancedMonitoringInput_Type, DisableEnhancedMonitoringOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DisableEnhancedMonitoring',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DisableEnhancedMonitoringInput,
    output: DisableEnhancedMonitoringOutput,
    errors: [],
};