import {DeleteIdentityPoolInput} from './DeleteIdentityPoolInput';
import {DeleteIdentityPoolOutput} from './DeleteIdentityPoolOutput';
import {DeleteIdentityPoolInput as DeleteIdentityPoolInput_Type} from '../types/DeleteIdentityPoolInput';
import {DeleteIdentityPoolOutput as DeleteIdentityPoolOutput_Type} from '../types/DeleteIdentityPoolOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteIdentityPool: _Operation_<DeleteIdentityPoolInput_Type, DeleteIdentityPoolOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DeleteIdentityPool',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DeleteIdentityPoolInput,
    output: DeleteIdentityPoolOutput,
    errors: [],
};