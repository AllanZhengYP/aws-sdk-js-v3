import {ListGlobalTablesInput} from './ListGlobalTablesInput';
import {ListGlobalTablesOutput} from './ListGlobalTablesOutput';
import {ListGlobalTablesInput as ListGlobalTablesInput_Type} from '../types/ListGlobalTablesInput';
import {ListGlobalTablesOutput as ListGlobalTablesOutput_Type} from '../types/ListGlobalTablesOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListGlobalTables: _Operation_<ListGlobalTablesInput_Type, ListGlobalTablesOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListGlobalTables',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListGlobalTablesInput,
    output: ListGlobalTablesOutput,
    errors: [],
};