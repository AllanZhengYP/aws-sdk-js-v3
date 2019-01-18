import {BatchGetItemInput} from './BatchGetItemInput';
import {BatchGetItemOutput} from './BatchGetItemOutput';
import {BatchGetItemInput as BatchGetItemInput_Type} from '../types/BatchGetItemInput';
import {BatchGetItemOutput as BatchGetItemOutput_Type} from '../types/BatchGetItemOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const BatchGetItem: _Operation_<BatchGetItemInput_Type, BatchGetItemOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'BatchGetItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: BatchGetItemInput,
    output: BatchGetItemOutput,
    errors: [],
};