import {SetIdentityPoolRolesInput} from './SetIdentityPoolRolesInput';
import {SetIdentityPoolRolesOutput} from './SetIdentityPoolRolesOutput';
import {SetIdentityPoolRolesInput as SetIdentityPoolRolesInput_Type} from '../types/SetIdentityPoolRolesInput';
import {SetIdentityPoolRolesOutput as SetIdentityPoolRolesOutput_Type} from '../types/SetIdentityPoolRolesOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const SetIdentityPoolRoles: _Operation_<SetIdentityPoolRolesInput_Type, SetIdentityPoolRolesOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'SetIdentityPoolRoles',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: SetIdentityPoolRolesInput,
    output: SetIdentityPoolRolesOutput,
    errors: [],
};