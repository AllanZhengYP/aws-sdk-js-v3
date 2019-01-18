import {ListStreamsInput} from './ListStreamsInput';
import {ListStreamsOutput} from './ListStreamsOutput';
import {ListStreamsInput as ListStreamsInput_Type} from '../types/ListStreamsInput';
import {ListStreamsOutput as ListStreamsOutput_Type} from '../types/ListStreamsOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListStreams: _Operation_<ListStreamsInput_Type, ListStreamsOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'ListStreams',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: ListStreamsInput,
    output: ListStreamsOutput,
    errors: [],
};