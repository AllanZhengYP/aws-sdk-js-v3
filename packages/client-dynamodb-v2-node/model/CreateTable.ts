import {CreateTableInput} from './CreateTableInput';
import {CreateTableOutput} from './CreateTableOutput';
import {CreateTableInput as CreateTableInput_Type} from '../types/CreateTableInput';
import {CreateTableOutput as CreateTableOutput_Type} from '../types/CreateTableOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateTable: _Operation_<CreateTableInput_Type, CreateTableOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'CreateTable',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: CreateTableInput,
    output: CreateTableOutput,
    errors: [],
};