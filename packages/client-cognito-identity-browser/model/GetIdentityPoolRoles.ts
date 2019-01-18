import {GetIdentityPoolRolesInput} from './GetIdentityPoolRolesInput';
import {GetIdentityPoolRolesOutput} from './GetIdentityPoolRolesOutput';
import {GetIdentityPoolRolesInput as GetIdentityPoolRolesInput_Type} from '../types/GetIdentityPoolRolesInput';
import {GetIdentityPoolRolesOutput as GetIdentityPoolRolesOutput_Type} from '../types/GetIdentityPoolRolesOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetIdentityPoolRoles: _Operation_<GetIdentityPoolRolesInput_Type, GetIdentityPoolRolesOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'GetIdentityPoolRoles',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: GetIdentityPoolRolesInput,
    output: GetIdentityPoolRolesOutput,
    errors: [],
};