import {DeleteStreamInput} from './DeleteStreamInput';
import {DeleteStreamOutput} from './DeleteStreamOutput';
import {DeleteStreamInput as DeleteStreamInput_Type} from '../types/DeleteStreamInput';
import {DeleteStreamOutput as DeleteStreamOutput_Type} from '../types/DeleteStreamOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteStream: _Operation_<DeleteStreamInput_Type, DeleteStreamOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'DeleteStream',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: DeleteStreamInput,
    output: DeleteStreamOutput,
    errors: [],
};