import {GetShardIteratorInput} from './GetShardIteratorInput';
import {GetShardIteratorOutput} from './GetShardIteratorOutput';
import {GetShardIteratorInput as GetShardIteratorInput_Type} from '../types/GetShardIteratorInput';
import {GetShardIteratorOutput as GetShardIteratorOutput_Type} from '../types/GetShardIteratorOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetShardIterator: _Operation_<GetShardIteratorInput_Type, GetShardIteratorOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'GetShardIterator',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: GetShardIteratorInput,
    output: GetShardIteratorOutput,
    errors: [],
};