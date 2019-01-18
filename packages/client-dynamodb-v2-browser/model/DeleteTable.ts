import {DeleteTableInput} from './DeleteTableInput';
import {DeleteTableOutput} from './DeleteTableOutput';
import {DeleteTableInput as DeleteTableInput_Type} from '../types/DeleteTableInput';
import {DeleteTableOutput as DeleteTableOutput_Type} from '../types/DeleteTableOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteTable: _Operation_<DeleteTableInput_Type, DeleteTableOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DeleteTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DeleteTableInput,
    output: DeleteTableOutput,
    errors: [],
};