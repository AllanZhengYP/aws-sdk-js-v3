import {CreateIdentityPoolInput} from './CreateIdentityPoolInput';
import {CreateIdentityPoolOutput} from './CreateIdentityPoolOutput';
import {CreateIdentityPoolInput as CreateIdentityPoolInput_Type} from '../types/CreateIdentityPoolInput';
import {CreateIdentityPoolOutput as CreateIdentityPoolOutput_Type} from '../types/CreateIdentityPoolOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateIdentityPool: _Operation_<CreateIdentityPoolInput_Type, CreateIdentityPoolOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'CreateIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: CreateIdentityPoolInput,
    output: CreateIdentityPoolOutput,
    errors: [],
};