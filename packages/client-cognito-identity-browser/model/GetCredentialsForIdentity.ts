import {GetCredentialsForIdentityInput} from './GetCredentialsForIdentityInput';
import {GetCredentialsForIdentityOutput} from './GetCredentialsForIdentityOutput';
import {GetCredentialsForIdentityInput as GetCredentialsForIdentityInput_Type} from '../types/GetCredentialsForIdentityInput';
import {GetCredentialsForIdentityOutput as GetCredentialsForIdentityOutput_Type} from '../types/GetCredentialsForIdentityOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetCredentialsForIdentity: _Operation_<GetCredentialsForIdentityInput_Type, GetCredentialsForIdentityOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'GetCredentialsForIdentity',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: GetCredentialsForIdentityInput,
    output: GetCredentialsForIdentityOutput,
    errors: [],
};