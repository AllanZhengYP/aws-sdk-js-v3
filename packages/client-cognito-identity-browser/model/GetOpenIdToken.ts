import {GetOpenIdTokenInput} from './GetOpenIdTokenInput';
import {GetOpenIdTokenOutput} from './GetOpenIdTokenOutput';
import {GetOpenIdTokenInput as GetOpenIdTokenInput_Type} from '../types/GetOpenIdTokenInput';
import {GetOpenIdTokenOutput as GetOpenIdTokenOutput_Type} from '../types/GetOpenIdTokenOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetOpenIdToken: _Operation_<GetOpenIdTokenInput_Type, GetOpenIdTokenOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'GetOpenIdToken',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: GetOpenIdTokenInput,
    output: GetOpenIdTokenOutput,
    errors: [],
};