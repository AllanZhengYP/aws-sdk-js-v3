import {CreateGlobalTableInput} from './CreateGlobalTableInput';
import {CreateGlobalTableOutput} from './CreateGlobalTableOutput';
import {CreateGlobalTableInput as CreateGlobalTableInput_Type} from '../types/CreateGlobalTableInput';
import {CreateGlobalTableOutput as CreateGlobalTableOutput_Type} from '../types/CreateGlobalTableOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateGlobalTable: _Operation_<CreateGlobalTableInput_Type, CreateGlobalTableOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'CreateGlobalTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: CreateGlobalTableInput,
    output: CreateGlobalTableOutput,
    errors: [],
};