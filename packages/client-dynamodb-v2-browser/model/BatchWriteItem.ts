import {BatchWriteItemInput} from './BatchWriteItemInput';
import {BatchWriteItemOutput} from './BatchWriteItemOutput';
import {BatchWriteItemInput as BatchWriteItemInput_Type} from '../types/BatchWriteItemInput';
import {BatchWriteItemOutput as BatchWriteItemOutput_Type} from '../types/BatchWriteItemOutput';
import {OperationModelon as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const BatchWriteItem: _Operation_<BatchWriteItemInput_Type, BatchWriteItemOutput_Type, any> = {
    metadata: ServiceMetadata,
    name: 'BatchWriteItem',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: BatchWriteItemInput,
    output: BatchWriteItemOutput,
    errors: [],
};