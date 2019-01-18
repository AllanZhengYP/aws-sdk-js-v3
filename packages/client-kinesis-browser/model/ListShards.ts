import {ListShardsInput} from './ListShardsInput';
import {ListShardsOutput} from './ListShardsOutput';
import {ListShardsInput as ListShardsInput_Type} from '../types/ListShardsInput';
import {ListShardsOutput as ListShardsOutput_Type} from '../types/ListShardsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListShards: _Operation_<ListShardsInput_Type, ListShardsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListShards',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListShardsInput,
    output: ListShardsOutput,
    errors: [],
};