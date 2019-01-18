import {UpdateTableInput} from './UpdateTableInput';
import {UpdateTableOutput} from './UpdateTableOutput';
import {UpdateTableInput as UpdateTableInput_Type} from '../types/UpdateTableInput';
import {UpdateTableOutput as UpdateTableOutput_Type} from '../types/UpdateTableOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateTable: _Operation_<UpdateTableInput_Type, UpdateTableOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'UpdateTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: UpdateTableInput,
    output: UpdateTableOutput,
    errors: [],
};