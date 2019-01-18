import {DeleteIdentitiesInput} from './DeleteIdentitiesInput';
import {DeleteIdentitiesOutput} from './DeleteIdentitiesOutput';
import {DeleteIdentitiesInput as DeleteIdentitiesInput_Type} from '../types/DeleteIdentitiesInput';
import {DeleteIdentitiesOutput as DeleteIdentitiesOutput_Type} from '../types/DeleteIdentitiesOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteIdentities: _Operation_<DeleteIdentitiesInput_Type, DeleteIdentitiesOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DeleteIdentities',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DeleteIdentitiesInput,
    output: DeleteIdentitiesOutput,
    errors: [],
};