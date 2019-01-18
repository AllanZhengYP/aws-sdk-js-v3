import {UpdateIdentityPoolInput} from './UpdateIdentityPoolInput';
import {UpdateIdentityPoolOutput} from './UpdateIdentityPoolOutput';
import {UpdateIdentityPoolInput as UpdateIdentityPoolInput_Type} from '../types/UpdateIdentityPoolInput';
import {UpdateIdentityPoolOutput as UpdateIdentityPoolOutput_Type} from '../types/UpdateIdentityPoolOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateIdentityPool: _Operation_<UpdateIdentityPoolInput_Type, UpdateIdentityPoolOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UpdateIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UpdateIdentityPoolInput,
    output: UpdateIdentityPoolOutput,
    errors: [],
};