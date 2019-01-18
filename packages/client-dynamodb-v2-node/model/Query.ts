import {QueryInput} from './QueryInput';
import {QueryOutput} from './QueryOutput';
import {QueryInput as QueryInput_Type} from '../types/QueryInput';
import {QueryOutput as QueryOutput_Type} from '../types/QueryOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const Query: _Operation_<QueryInput_Type, QueryOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'Query',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: QueryInput,
    output: QueryOutput,
    errors: [],
};