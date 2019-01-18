import {LookupDeveloperIdentityInput} from './LookupDeveloperIdentityInput';
import {LookupDeveloperIdentityOutput} from './LookupDeveloperIdentityOutput';
import {LookupDeveloperIdentityInput as LookupDeveloperIdentityInput_Type} from '../types/LookupDeveloperIdentityInput';
import {LookupDeveloperIdentityOutput as LookupDeveloperIdentityOutput_Type} from '../types/LookupDeveloperIdentityOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const LookupDeveloperIdentity: _Operation_<LookupDeveloperIdentityInput_Type, LookupDeveloperIdentityOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'LookupDeveloperIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: LookupDeveloperIdentityInput,
    output: LookupDeveloperIdentityOutput,
    errors: [],
};