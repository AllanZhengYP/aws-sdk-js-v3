import {DeleteItemInput} from './DeleteItemInput';
import {DeleteItemOutput} from './DeleteItemOutput';
import {DeleteItemInput as DeleteItemInput_Type} from '../types/DeleteItemInput';
import {DeleteItemOutput as DeleteItemOutput_Type} from '../types/DeleteItemOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteItem: _Operation_<DeleteItemInput_Type, DeleteItemOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DeleteItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DeleteItemInput,
    output: DeleteItemOutput,
    errors: [],
};