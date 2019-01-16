import {ListTablesInput} from './ListTablesInput';
import {ListTablesOutput} from './ListTablesOutput';
import {ListTablesInput as ListTablesInput_Type} from '../types/ListTablesInput';
import {ListTablesOutput as ListTablesOutput_Type} from '../types/ListTablesOutput'
import {InternalServerError} from './InternalServerError';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListTables: _Operation_<ListTablesInput_Type, ListTablesOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListTables',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListTablesInput,
    output: ListTablesOutput,
    errors: [
        {
            shape: InternalServerError,
        },
    ],
};