import {ListStreamConsumersInput} from './ListStreamConsumersInput';
import {ListStreamConsumersOutput} from './ListStreamConsumersOutput';
import {ListStreamConsumersInput as ListStreamConsumersInput_Type} from '../types/ListStreamConsumersInput';
import {ListStreamConsumersOutput as ListStreamConsumersOutput_Type} from '../types/ListStreamConsumersOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListStreamConsumers: _Operation_<ListStreamConsumersInput_Type, ListStreamConsumersOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListStreamConsumers',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListStreamConsumersInput,
    output: ListStreamConsumersOutput,
    errors: [],
};