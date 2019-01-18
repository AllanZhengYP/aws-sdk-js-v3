import {GetOpenIdTokenForDeveloperIdentityInput} from './GetOpenIdTokenForDeveloperIdentityInput';
import {GetOpenIdTokenForDeveloperIdentityOutput} from './GetOpenIdTokenForDeveloperIdentityOutput';
import {GetOpenIdTokenForDeveloperIdentityInput as GetOpenIdTokenForDeveloperIdentityInput_Type} from '../types/GetOpenIdTokenForDeveloperIdentityInput';
import {GetOpenIdTokenForDeveloperIdentityOutput as GetOpenIdTokenForDeveloperIdentityOutput_Type} from '../types/GetOpenIdTokenForDeveloperIdentityOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetOpenIdTokenForDeveloperIdentity: _Operation_<GetOpenIdTokenForDeveloperIdentityInput_Type, GetOpenIdTokenForDeveloperIdentityOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'GetOpenIdTokenForDeveloperIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: GetOpenIdTokenForDeveloperIdentityInput,
    output: GetOpenIdTokenForDeveloperIdentityOutput,
    errors: [],
};