import {UpdateGlobalTableSettingsInput} from './UpdateGlobalTableSettingsInput';
import {UpdateGlobalTableSettingsOutput} from './UpdateGlobalTableSettingsOutput';
import {UpdateGlobalTableSettingsInput as UpdateGlobalTableSettingsInput_Type} from '../types/UpdateGlobalTableSettingsInput';
import {UpdateGlobalTableSettingsOutput as UpdateGlobalTableSettingsOutput_Type} from '../types/UpdateGlobalTableSettingsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateGlobalTableSettings: _Operation_<UpdateGlobalTableSettingsInput_Type, UpdateGlobalTableSettingsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UpdateGlobalTableSettings',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UpdateGlobalTableSettingsInput,
    output: UpdateGlobalTableSettingsOutput,
    errors: [],
};